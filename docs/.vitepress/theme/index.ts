import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "../styles/index.scss";
import "../styles/icnos.scss";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    // app.component('FeatureComponent', FeatureComponent)
  },
} satisfies Theme;
