import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/Components'),
      '@pages': path.resolve(__dirname, './src/Pages'),
      '@styles': path.resolve(__dirname, './src/Styles'),
      '@services': path.resolve(__dirname, './src/Services'),
      '@router': path.resolve(__dirname, './src/Router'),
      '@types': path.resolve(__dirname, './src/Types'),
      '@utils': path.resolve(__dirname, './src/Components/Utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Laden der Base-Styles als globale Imports
        additionalData: `@use "@styles/Base" as *;`,
        // Moderne Sass API aktivieren
        api: 'modern-compiler'
      }
    }
  }
})