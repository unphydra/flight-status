/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./setupTests.ts"],
    globals: true,
    environment: "jsdom",
    css: true,
    watch: false,
    coverage: {
      reporter: ["text", "json-summary", "json", "html"],
      reportOnFailure: true,
    },
  },
});
