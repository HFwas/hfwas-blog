import { arraySidebar } from "vuepress-theme-hope";

export const other = arraySidebar([
    {
        text: "博客",
        icon: "/blog-solid.svg",
        prefix: "blog/",
        collapsible: false,
        children: [
            "00-blog-deploy.md",
            "01-domain-apply.md",
            "02-enable-https.md",
            "readme-prohibition.md",
            "waline.md",
            "03-pagespeed.md",
        ],
    },
    {
        text: "友链",
        icon: "/link-solid.svg",
        link: "friends/site.md",
        collapsible: false
    },
    {
        text: "软件",
        icon: "/icons8-software-50.png",
        prefix: "softerware/",
        collapsible: false,
        children: [
            "20220329-内网安装docker环境.md",
            "20220821-外网安装docker.md",
            "20220828-linux命令自动补全.md",
            "20220828-linux安装git.md",
            "20240311-xshell和xftp.md",
        ],
    },
    {
        text: "工具",
        icon: "/toolbox-solid.svg",
        link: "tools/overriew.md",
        collapsible: true
    }
]);