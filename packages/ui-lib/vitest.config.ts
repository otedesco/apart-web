import { defineConfig } from "vitest/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    setupFiles: ["./setupTests.js"],
    environment: "jsdom",
    globals: true,
  },
});
