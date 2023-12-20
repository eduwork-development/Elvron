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
        port_hisoc: resolve(__dirname, "portfolio-hisoc.html"),
        port_eduwork: resolve(__dirname, "portfolio-eduwork.html"),
        port_upscale: resolve(__dirname, "portfolio-upscale.html"),
        port_sisko: resolve(__dirname, "portfolio-sisko.html"),
        port_mydoit: resolve(__dirname, "portfolio-mydoit.html"),
      },
    },
  },
});
