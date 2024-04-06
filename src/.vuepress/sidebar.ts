import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "运维知识",
      icon: "laptop-code",
      prefix: "yw/",
      link: "yw/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "其他",
      icon: "laptop-code",
      prefix: "other/",
      link: "other/",
      children: "structure",
    },
    "intro",
  ],
});
