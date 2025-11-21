import { defineConfig } from "vite";
import marko from "@marko/run/vite";

export default defineConfig({
  plugins: [marko()],
  build: {
    minify: true,
    emptyOutDir: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        format: "es",
      },
    },
    ssr: process.env.NODE_ENV === "production",
  },
});
