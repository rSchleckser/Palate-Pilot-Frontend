import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 8000,
    proxy: {
      '/api': 'http://localhost:3000'
          },
    },
  // },
  // build: {
  //   outDir: 'dist',
  // },
});