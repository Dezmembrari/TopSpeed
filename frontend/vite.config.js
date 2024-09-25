import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'; // Import the compression plugin



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      algorithm: 'brotliCompress', // You can change this to 'gzip' if you prefer Gzip compression
      ext: '.br', // File extension for Brotli compressed files
      threshold: 10240, // Compress files larger than 10 KB
      deleteOriginFile: false, // Keep the original files
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/',
});
