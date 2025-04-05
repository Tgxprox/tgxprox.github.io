import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import VideoLink from "../components/VideoLinkComponent.vue";
import "../styles/index.scss";
import "../styles/icnos.scss";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component("VideoLink", VideoLink);
  },
} satisfies Theme;
