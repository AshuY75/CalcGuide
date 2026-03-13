import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ ssrBuild }) => ({
  base: "/",

  plugins: [
    react(),
    !ssrBuild && tailwindcss()
  ].filter(Boolean),

  build: {
    sourcemap: false,
    outDir: "dist",

    rollupOptions: {
      output: ssrBuild
        ? {
          entryFileNames: "server/entry-server.js",
          chunkFileNames: "server/chunks/[name].js",
          assetFileNames: "assets/[name][extname]"
        }
        : {
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]"
        }
    }
  },

  ssr: {
    noExternal: ["react-helmet-async"]
  }
}));