import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  port: 9898,
  lang: "zh-CN",
  title: "HFwas",
  description: "HFwas的博客",

  theme,

  // 和 PWA 一起启用
  shouldPrefetch: false,
});
