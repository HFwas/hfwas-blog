import { sidebar } from "vuepress-theme-hope";

import { devops } from "./devops.ts";
import { dev } from "./dev.js";
import { language } from "./language.ts";
import { other } from "./other.ts";
import { life } from "./life.ts";

export default sidebar({
    // 应该把更精确的路径放置在前边
    "/devops/": devops,
    "/dev/": dev,
    "/language/": language,
    "/other/": other,
    "/life/": life,
});
