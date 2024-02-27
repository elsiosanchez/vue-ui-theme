import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Adempiere UI",
      description: "",
    },
    "/es/": {
      lang: "es-ES",
      title: 'Adempiere Interfaz Usuario',
      description: 'Una documentación de definición de interfaz de usuario basada en componentes, composiciones y diseños de patrones.',
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "博客演示",
    //   description: "vuepress-theme-hope 的博客演示",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
