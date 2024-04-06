import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "运维知识",
    icon: "pen-to-square",
    prefix: "/yw/",
    children: [
      {
        text: "Linux",
        icon: "pen-to-square",
        prefix: "00-linux/",
        link: "00-linux/index"
      },
      {
        text: "Shell",
        icon: "pen-to-square",
        prefix: "01-shell/",
        link: "01-shell/index",
      },
      {
        text: "Docker",
        icon: "pen-to-square",
        prefix: "02-docker/",
        link: "02-docker/index",
      },
      {
        text: "K8s",
        icon: "pen-to-square",
        prefix: "03-k8s/",
        link: "03-k8s/index",
      },
      {
        text: "Ansible",
        icon: "pen-to-square",
        prefix: "04-ansible/",
        link: "04-ansible/index",
      },
    ]
  },
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
        ],
      }
    ],
  },
  {
    text: "其他",
    icon: "pen-to-square",
    prefix: "/other/",
    children: [
      {
        text: "博客",
        icon: "pen-to-square",
        prefix: "blog/",
        link: "blog/index"
      },
      {
        text: "友情链接",
        icon: "pen-to-square",
        prefix: "friends/",
        link: "friends/site",
      },
      {
        text: "工具集",
        icon: "pen-to-square",
        prefix: "tools/",
        link: "tools/overriew",
      },
      {
        text: "软件安装",
        icon: "pen-to-square",
        prefix: "softerware/",
        link: "softerware/index",
      },
    ]
  },
]);
