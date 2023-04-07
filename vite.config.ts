/* eslint-disable spaced-comment */
/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environments',
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    open: true,
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
