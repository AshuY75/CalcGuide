import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ isSsrBuild }) => ({
  base: '/',
  plugins: [
    react(),
    !isSsrBuild && tailwindcss()
  ].filter(Boolean),
  build: {
    sourcemap: false,
    rollupOptions: {
      output: isSsrBuild
        ? {
          entryFileNames: "entry-server.js",
          chunkFileNames: "chunks/[name].js",
          assetFileNames: "assets/[name][extname]"
        }
        : {
          manualChunks: undefined,
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]"
        },
    },
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
}))
