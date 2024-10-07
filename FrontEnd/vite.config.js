import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/media/QRcode': {
        target: 'http://15.165.247.2',
        changeOrigin: true,
      },
    },
  },
});
