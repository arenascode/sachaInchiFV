import { defineConfig } from "vite";

// Configuración básica
export default defineConfig({
  build: {
    outDir: "dist", // Carpeta donde se generan los archivos compilados
    rollupOptions: {
      input: {
        main: "./index.html",
        about: "./src/pages/about.html",
        mission: "./src/pages/mission.html"
      },
    },
  },
  // base: "https://arenascode.github.io/sachaInchi",
});
