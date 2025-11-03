import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // --- Define 'src' as the root directory ---
  root: path.resolve(__dirname, 'src'),

  // Configure the base path for GitHub Pages deployment.
  // The `./` ensures relative paths work correctly.
  base: './',

  // Set up aliases for easy module importing
  resolve: {
    alias: {
      // Allows using imports like `~bootstrap/scss/bootstrap` in SCSS files
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },

  // Configuration for the development server
  server: {
    // You can set a specific port if needed, otherwise Vite defaults to 5173
    port: 3000,
    // This allows access from your Windows host machine via localhost:3000
    host: '0.0.0.0'
  },

  // --- NEW: Configure the build output directory ---
  build: {
    // Setting outDir to '../dist' tells Vite to go up one level from the 'root' (src)
    // and place the final build output in a 'dist' folder in the project root.
    outDir: '../dist',
  }
});
