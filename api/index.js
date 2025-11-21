// Vercel serverless function entry point for Marko Run
// Set environment to prevent server startup
process.env.VERCEL = "1";
process.env.PORT = "0"; // Prevent server from binding

let markoFetch;

// Lazy load the module to get the fetch handler
async function getMarkoFetch() {
  if (markoFetch) return markoFetch;

  // Import the built module - it will set globalThis.__marko_run__.fetch
  // The module tries to start a server, but PORT=0 should prevent binding
  try {
    // Suppress console errors from server startup attempts
    const originalError = console.error;
    console.error = (...args) => {
      const msg = args[0]?.toString() || "";
      if (
        !msg.includes("listen") &&
        !msg.includes("EADDRINUSE") &&
        !msg.includes("EACCES")
      ) {
        originalError(...args);
      }
    };

    await import("../dist/index.mjs");

    // Restore console.error
    console.error = originalError;
  } catch (err) {
    // Ignore server startup errors in serverless environment
    if (
      !err.message?.includes("listen") &&
      !err.message?.includes("EADDRINUSE") &&
      !err.message?.includes("EACCES")
    ) {
      console.error("Error loading Marko Run:", err);
    }
  }

  // Get the fetch handler from globalThis
  markoFetch = globalThis.__marko_run__?.fetch;

  if (!markoFetch) {
    throw new Error(
      "Marko Run fetch handler not found. Make sure the build completed successfully."
    );
  }

  return markoFetch;
}

export default async function handler(req, res) {
  try {
    const fetch = await getMarkoFetch();

    // Construct the full URL
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const url = `${protocol}://${host}${req.url}`;

    // Create a Request object compatible with Fetch API
    const requestInit = {
      method: req.method,
      headers: new Headers(req.headers),
    };

    // Add body for non-GET/HEAD requests
    if (req.method !== "GET" && req.method !== "HEAD" && req.body) {
      if (typeof req.body === "string") {
        requestInit.body = req.body;
      } else if (Buffer.isBuffer(req.body)) {
        requestInit.body = req.body;
      } else {
        requestInit.body = JSON.stringify(req.body);
      }
    }

    const request = new Request(url, requestInit);

    // Call the Marko Run fetch handler
    const response = await fetch(request);

    // Convert Fetch Response to Vercel response
    res.status(response.status);

    // Copy headers
    response.headers.forEach((value, key) => {
      // Skip some headers that Vercel manages
      const lowerKey = key.toLowerCase();
      if (lowerKey !== "content-encoding" && lowerKey !== "transfer-encoding") {
        res.setHeader(key, value);
      }
    });

    // Get response body
    // Check if response is a stream or text
    const contentType = response.headers.get("content-type") || "";
    if (
      contentType.includes("text") ||
      contentType.includes("html") ||
      contentType.includes("json")
    ) {
      const body = await response.text();
      return res.send(body);
    } else {
      // For binary content, use arrayBuffer
      const buffer = await response.arrayBuffer();
      return res.send(Buffer.from(buffer));
    }
  } catch (error) {
    console.error("Error in Vercel handler:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}
