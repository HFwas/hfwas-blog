import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "运维知识",
      icon: "laptop-code",
      prefix: "yw/",
      link: "yw/",
      children: "structure",
    },
    {
      text: "框架",
      icon: "book",
      prefix: "structure/",
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
