import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/es/": [
    "",
    {
      text: "Documentación",
      icon: "signs-post",
      prefix: "docs/",
      children: "structure",
    }
  ],
});
