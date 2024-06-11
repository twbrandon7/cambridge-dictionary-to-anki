import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "$": "vite-plugin-monkey/dist/client",
    },
  },
});
