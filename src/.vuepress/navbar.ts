import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
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
      {
        text: "Nexus",
        icon: "pen-to-square",
        prefix: "05-nexus/",
        link: "05-nexus/index",
      },
      {
        text: "Helm",
        icon: "pen-to-square",
        prefix: "06-helm/",
        link: "06-helm/index",
      },
      {
        text: "Jenkins",
        icon: "pen-to-square",
        prefix: "07-jenkins/",
        link: "07-jenkins/index",
      },
      {
        text: "Minio",
        icon: "pen-to-square",
        prefix: "08-minio/",
        link: "08-minio/00-minio-mc-command",
      },
      {
        text: "Mysql",
        icon: "pen-to-square",
        prefix: "09-mysql/",
        link: "09-mysql/00-enable-bin-log",
      },
    ]
  },
  {
    text: "Java框架",
    icon: "pen-to-square",
    prefix: "/structure/",
    children: [
      {
        text: "Mybatis",
        icon: "pen-to-square",
        prefix: "mybatis/",
        link: "mybatis/00-basic"
      },
    ]
  },
  {
    text: "开发相关",
    icon: "pen-to-square",
    prefix: "/dev/",
    children: [
      {
        text: "基础类库",
        icon: "pen-to-square",
        prefix: "class/",
        link: "class/01-bean耗时"
      },
      {
        text: "错误笔记",
        icon: "pen-to-square",
        prefix: "record/",
        link: "record/"
      },
      {
        text: "杂记",
        icon: "pen-to-square",
        prefix: "other/",
        link: "other/"
      },
    ]
  },
  {
    text: "语言知识",
    icon: "pen-to-square",
    prefix: "/language/",
    children: [
      {
        text: "前端",
        icon: "pen-to-square",
        prefix: "01-fronted/",
        link: "01-fronted/00-打补丁解决前端bug"
      },
      {
        text: "Nginx",
        icon: "pen-to-square",
        prefix: "02-nginx/",
        link: "02-nginx/00-nginx-https"
      },
      {
        text: "MySql",
        icon: "pen-to-square",
        prefix: "05-mysql/",
        link: "05-mysql/01_基础查询"
      },
    ]
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
        // prefix: "friends/",
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
