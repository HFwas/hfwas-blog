import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidecar/index.ts";

export default hopeTheme({
  hostname: "https://www.hfwas.tech",

  author: {
    name: "HFwas",
    url: "https://www.hfwas.tech",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/ChatHFwas.avif",

  repo: "https://github.com/HFwas/hfwas-blog",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2023006845号-2</a> | 主题: <a href="https://vuepress-theme-hope.github.io/v2/" target="_blank">VuePress Theme Hope</a>',
  displayFooter: true,

  pageInfo: ["Author", "Category", "Tag", "Original", "Word", "ReadingTime"],

  // 博客相关
  blog: {
    description: "基于云原生的Devops工程师",
    intro: "/intro.html",
    medias: {
      Email: "hfwas1024@163.com",
      GitHub: "https://github.com/HFwas",
      Gmail: "hfwas1024@gmail.com",
      // MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["123467"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    comment: {
      provider: "Waline",
      serverURL: "https://waline-flame-nine.vercel.app",
      // 评论者相关属性
      meta: ['nick', 'mail'],
      // 设置必填项，邮箱选填，账号名称必填
      requiredMeta: ['nick'],
    },

    components: {
      components: ["Badge", "VPCard", "SiteInfo"],
      // componentOptions: {
      //   fontIcon: {
      //     assets: []
      //   }
      // }
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    pwa: {
      favicon: "/ChatHFwas.avif",
      cacheHTML: true,
      appendBase: true,
      apple: {
        icon: "/ChatHFwas.avif",
        statusBarColor: "black",
      },
      msTile: {
        image: "/ChatHFwas.avif",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/ChatHFwas.avif",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/ChatHFwas.avif",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/ChatHFwas.avif",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/ChatHFwas.avif",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/ChatHFwas.avif",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
