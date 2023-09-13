import react from '@vitejs/plugin-react';
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), reactRefresh()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
