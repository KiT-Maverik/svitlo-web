import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)), '@types': fileURLToPath(new URL('./src/types/index.ts', import.meta.url)) } },
  test: {
    environment: 'jsdom',
    include: ['src/**/*.unit.spec.test.ts', 'src/**/*.unit.spec.test.tsx'],
    setupFiles: ['./src/test/setup.ts'],
    restoreMocks: true,
    clearMocks: true,
    css: true,
    coverage: { provider: 'v8', reporter: ['text', 'json-summary'] },
  },
});
