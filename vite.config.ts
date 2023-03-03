import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js')
    }
  },
  optimizeDeps: {
    include: [
      'tailwind.config.js'
    ]
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  },
  build: {
    commonjsOptions: {
      include: ['tailwind.config.js', 'node_modules/**']
    }
  }
})
