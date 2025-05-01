import { arraySidebar } from "vuepress-theme-hope";

export const dev = arraySidebar([
    {
        text: "杂谈",
        icon: "et-performance",
        prefix: "other/",
        collapsible: false,
        children: [
            "1-remote-debug.md",
            "2-performance-optimization.md",
            "3-config-ssh-clone.md",
        ],
    },
    {
        text: "错误笔记",
        icon: "/bug-solid.svg",
        prefix: "record/",
        collapsible: false,
        children: [
            "20230612-kubectl cp error tar removing leading from member names.md",
            "20230613-Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured..md",
            "20230613-HTTP2 stream 1 was not closed cleanly before end of the underlying stream.md",
            "20230803-REMOTE_ISSUES_FAIL:too many bytes written executing.md",
            "20240311-exceeds the max of 500kb.md",
        ],
    }
]);