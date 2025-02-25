import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Ensures Render can access the server
    port: process.env.PORT || 5173,  // Use Render's port or default to 5173 locally
    strictPort: true, // Prevents fallback to another port
  },
  preview: {
    host: '0.0.0.0',  // Needed for Render
    port: process.env.PORT || 5173,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
  }
});
