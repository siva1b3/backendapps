/// <reference types="vitest/config" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true, // Allows using global test functions without importing (describe, it, expect)
    include: ["tests/**/*.test.ts"], // Test file pattern
    coverage: {
      reporter: ["text", "html"], // Code coverage reports
      all: true,
    },
  },
});
