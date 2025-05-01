import { arraySidebar } from "vuepress-theme-hope";

export const other = arraySidebar([
    {
        text: "博客",
        icon: "et-performance",
        prefix: "blog/",
        collapsible: false,
        children: [
            "00-blog-deploy.md",
            "01-domain-apply.md",
            "02-enable-https.md",
            "readme-prohibition.md",
            "waline.md",
        ],
    },
    {
        text: "友联",
        icon: "experience",
        prefix: "friends/",
        collapsible: false,
        children: [
            "site.md",
        ],
    },
    {
        text: "软件",
        icon: "code",
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
        icon: "interview",
        prefix: "tools/",
        collapsible: true,
        children: [
            "overriew.md",
        ],
    }
]);