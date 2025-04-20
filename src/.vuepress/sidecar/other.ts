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
            "20220312-homebrew安装openresty.md",
            "20220312-homebrew安装telnet.md",
            "20220312-homwbrew安装lua.md",
            "20220329-内网安装docker环境.md",
            "20240311-xshell和xftp.md",
            "20240706-mac-finalshell.md",
            "20240706-mac-homebrew.md",
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