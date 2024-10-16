import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression'; // Import the compression plugin

export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      algorithm: 'brotliCompress', // Use Brotli compression
      ext: '.br', // File extension for Brotli compressed files
      threshold: 10240, // Compress files larger than 10 KB
      deleteOriginFile: false, // Keep the original files
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/',
  build: {
    minify: 'esbuild', // Fast minification
    rollupOptions: {
      // Enable more aggressive tree-shaking
      treeshake: {
        moduleSideEffects: 'no-external',
        propertyReadSideEffects: false, // Removes code that only has property reads
        tryCatchDeoptimization: false,  // Prevents Rollup from keeping try/catch blocks that aren't necessary
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';  // Separate vendor libraries
          }
        },
      },
    },
    sourcemap: false, // Optionally disable source maps in production for better performance
    chunkSizeWarningLimit: 500, // Increase chunk size warning limit
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb for faster load
    cssCodeSplit: true, // Split CSS to reduce unused CSS in the final build
  },
});