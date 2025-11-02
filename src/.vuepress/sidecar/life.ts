import { arraySidebar } from "vuepress-theme-hope";

export const life = arraySidebar([
    {
        text: "徒步",
        icon: "/pngtree-hiking-icon-a-hiker.png",
        prefix: "on-foot/",
        collapsible: true,
        children: [
            'README.md',
            "20251012-sanfeng.md",
        ],
    },
]);