import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./routers/app";
import superjson from "superjson";

export const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      transformer: superjson,
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
