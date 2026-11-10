import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://momo2317.github.io",
  base: "/website-chat4meet",
  output: "static",
  integrations: [tailwind()],
  vite: {
    server: {
      open: "/website-chat4meet/",
    },
  },
});
