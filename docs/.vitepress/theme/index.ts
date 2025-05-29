import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import VideoLink from "../components/VideoLinkComponent.vue";
import PurchaseCardComponent from "../components/PurchaseCardComponent.vue";
import "../styles/index.scss";
import "../styles/icnos.scss";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component("VideoLink", VideoLink);
    app.component("PurchaseCardComponent", PurchaseCardComponent);
  },
} satisfies Theme;
