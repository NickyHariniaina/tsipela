import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Environment
    environment: 'node',

    // Global APIs (describe, it, expect)
    globals: true,

    // File patterns
    include: ['test/**/*.{test,spec}.ts'],
    exclude: ['**/node_modules/**', '**/dist/**'],

    // Coverage
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json', 'lcov'],
      exclude: [
        '**/*.{test,spec}.ts',
        '**/index.ts',
        '**/types/**',
        '**/dist/**',
        '**/node_modules/**'
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      }
    },

    // Timeout (ms)
    testTimeout: 10000,

    // Retry failed tests
    retry: 1,

    // Run tests sequentially (for better debugging)
    sequence: {
      concurrent: false
    }
  }
});
