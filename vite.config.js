import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => ({
  base: mode === "gh" ? "https://arenascode.github.io/sachaInchiFV" : "/",

  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/pages/about.html"),
        mission: resolve(__dirname, "src/pages/mission.html"),
        bosqueSeco: resolve(__dirname, "src/pages/bosqueSeco.html"),
      },
    },
  },
}));
