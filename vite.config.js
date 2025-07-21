import { defineConfig } from "vite";
import {resolve} from "path";

// Configuración básica
export default defineConfig({
  build: {
    outDir: "dist", // Carpeta donde se generan los archivos compilados
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Main entry point
        about: resolve(__dirname, "src/pages/about.html"), // About page
        mission: resolve(__dirname, "src/pages/mission.html"), // Mission page
        bosqueSeco: resolve(__dirname, "src/pages/bosqueSeco.html") //Bosque Seco page
      },
    },
  },
  base: "https://arenascode.github.io/sachaInchiFV",
});
