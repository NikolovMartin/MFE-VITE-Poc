import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "tankMix",
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
