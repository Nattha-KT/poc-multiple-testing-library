import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react';
import path from 'path'


export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // use '@' to refer to the 'src' folder
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
  build: {
    rollupOptions: {
      external: ['msw'],
    },
  },
});