import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  port: 9898,
  lang: "zh-CN",
  title: "HFwas",
  description: "HFwas的博客",

  head: [
      ['meta', {name: 'baidu-site-verification', content: 'codeva-Qr5UPSPuab'}],
      ['meta', {name: '360-site-verification', content: 'bb63045cb42977fa44dba977f095a42f'}],
      ['meta', {name: 'msvalidate.01', content: '8F660B701AFF402CFE968D8155346E6A'}],
      ['meta', {name: "google-site-verification",content: "haDC5Fd6-XOF14hosBI6MvUXfI6ajLC68Dvct3IE3zU"}],
      ['meta', {name: "shenma-site-verification",content: "a4e0e8bad88fecd4d32ea538856fcc98_1712766118"}],
      ['meta', {name: "sogou_site_verification",content: "qckdOcBHvZ"}],
      ['script', {}, `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?8dc86dd1ce3336d553ac539d00ff3dcc";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`
      ],
      ],

  theme,

  // 和 PWA 一起启用
  shouldPrefetch: false,
});
