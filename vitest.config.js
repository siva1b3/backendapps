/// <reference types="vitest/config" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    ui: true,
    watch: true,
  },
  server: {
    host: "0.0.0.0",   // <--- important
    port: 51204,
  },
})