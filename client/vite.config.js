import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate vendor chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    cssCodeSplit: false, // Bundle all CSS into a single file
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },

  server: {

    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
    hmr: {
      overlay: true,
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano({
          preset: 'default',
        }),
      ],
    },
  },
});
