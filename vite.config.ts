/// <reference types="vitest/config" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    ui: true,
  },
  server: {
    host: "0.0.0.0", // <- This is the key part
    port: 51204, // Optional: ensure fixed port if needed
  },
});
