import comp from "/Users/houfei/workspace/hfwas-blog/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"博客主页\",\"heroImage\":\"/assets/icon/guide-maskable.png\",\"heroText\":\"HFwas\",\"heroFullScreen\":false,\"tagline\":\"Java开发，熟悉运维知识，会点前端\",\"projects\":[{\"icon\":\"project\",\"name\":\"项目名称\",\"desc\":\"项目详细描述\",\"link\":\"https://你的项目链接\"},{\"icon\":\"link\",\"name\":\"链接名称\",\"desc\":\"链接详细描述\",\"link\":\"https://链接地址\"},{\"icon\":\"book\",\"name\":\"书籍名称\",\"desc\":\"书籍详细描述\",\"link\":\"https://你的书籍链接\"},{\"icon\":\"article\",\"name\":\"文章名称\",\"desc\":\"文章详细描述\",\"link\":\"https://你的文章链接\"},{\"icon\":\"friend\",\"name\":\"伙伴名称\",\"desc\":\"伙伴详细介绍\",\"link\":\"https://你的伙伴链接\"},{\"icon\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"name\":\"自定义项目\",\"desc\":\"自定义详细介绍\",\"link\":\"https://你的自定义链接\"}],\"footer\":\"京ICP备2023006845号-2\",\"description\":\"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: BlogHome 和 home: true。 相关配置文档请见 博客主页。\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.76,\"words\":229},\"filePathRelative\":\"README.md\",\"excerpt\":\"<p>这是一个博客主页的案例。</p>\\n<p>要使用此布局，你应该在页面前端设置 <code>layout: BlogHome</code> 和 <code>home: true</code>。</p>\\n<p>相关配置文档请见 <a href=\\\"https://theme-hope.vuejs.press/zh/guide/blog/home/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">博客主页</a>。</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
