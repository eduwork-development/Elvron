import { resolve } from "path";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        our_team: resolve(__dirname, "our-team.html"),
        news: resolve(__dirname, "news.html"),
        history: resolve(__dirname, "history.html"),
      },
    },
  },
});
