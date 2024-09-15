import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import fs from 'fs'; // Import the fs module
import path from 'path'; // Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    http: {
      key: fs.readFileSync(path.resolve(__dirname, './server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, './server.crt')),
    },
    host: true,
    port: 1515, // Change to your preferred port
  }
});
