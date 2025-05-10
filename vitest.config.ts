// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.{test,int.test}.ts"],
    exclude: ["node_modules", "dist"],
  },
});
