import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      components: '/src/components',
      shared: '/src/shared',
    },
  },
  // base: '/MitraSoft-test-task/',
})
