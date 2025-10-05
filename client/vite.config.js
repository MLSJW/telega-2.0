import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9998', // Адрес вашего Node.js сервера
        changeOrigin: true,
        secure: false,
      },
    },
  },

})
