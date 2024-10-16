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
      threshold: 1024, // Lower threshold to 1KB
      deleteOriginFile: false,
      compressionOptions: {
        level: 11, // Maximum compression
      },
    }),
    // Add gzip compression as fallback
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
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