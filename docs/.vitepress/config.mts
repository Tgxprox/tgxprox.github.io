import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TG-X",
  description: "Telegram 超级工具",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/features" },
      {
        text: "v1.0.0",
        items: [
          {
            text: "更新日志",
            link: "/blog.md",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "账号管理",
        collapsed: false,
        items: [{ text: "🛡️ 批量导入", link: "/account/manage.md" }],
      },
      {
        text: "群组管理",
        collapsed: false,
        items: [
          { text: "📡 群组监听", link: "/group/monitor.md" },
          { text: "🎯 定时群发", link: "/group/masstexting.md" },
          { text: "🚀 批量创建", link: "/group/create.md" },
          { text: "⛏️ 批量采集", link: "/group/gather.md" },
          { text: "🤖 批量强拉", link: "/group/Invite.md" },
          { text: "🤝 批量加群", link: "/group/join.md" },
          // { text: "🎭 智能吵群", link: "/group/aiinteraction.md" },
        ],
      },
      {
        text: "消息管理",
        collapsed: false,
        items: [
          { text: "🧠 批量私信", link: "/message/sends.md" },
          { text: "🌐 批量转发", link: "/message/forward.md" },
        ],
      },
      // {
      //   text: "超级搜素",
      //   collapsed: false,
      //   items: [
      //     { text: "🔍 全量搜索", link: "/search/global.md" },
      //     { text: "📊 用户分析", link: "/search/usersanalyze.md" },
      //   ],
      // },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
});
