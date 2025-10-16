import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "运维知识",
      icon: "laptop-code",
      prefix: "devops/",
      link: "devops/",
      children: "structure",
    },
    {
      text: "框架",
      icon: "book",
      prefix: "structure/",
      children: "structure",
    },
    {
      text: "开发相关",
      icon: "book",
      prefix: "dev/",
      link: "dev/",
      children: "structure",
    },
    {
      text: "语言知识",
      icon: "book",
      prefix: "language/",
      link: "language/",
      children: "structure",
    },
    {
      text: "生活",
      icon: "pngtree-ecolife.png",
      prefix: "life/",
      link: "life/",
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
