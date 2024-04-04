import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "运维知识",
    icon: "pen-to-square",
    prefix: "/demo2/",
    children: [
      {
        text: "Linux",
        icon: "pen-to-square",
        prefix: "00-linux/1",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
        ]
      },
      {
        text: "Shell",
        icon: "pen-to-square",
        prefix: "01-shell/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
        ]
      },
      {
        text: "Docker",
        icon: "pen-to-square",
        prefix: "02-docker/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
        ]
      },
      {
        text: "K8s",
        icon: "pen-to-square",
        prefix: "03-k8s/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
        ]
      },
      {
        text: "Ansible",
        icon: "pen-to-square",
        prefix: "04-ansible/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
        ]
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
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
