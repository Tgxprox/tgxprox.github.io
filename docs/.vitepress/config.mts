import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TG-X",
  description:
    "telegram 纸飞机 账号导入 批量加群 采集隐藏  定时群发 批量监听  采集可见 批量私信 批量转发 群发 飞机群发 飞机引流",
  base: "/",
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: "/favicon.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/ipproxy" },
      { text: "问题", link: "/problem" },
      // {
      //   text: "v1.0.0",
      //   items: [
      //     {
      //       text: "更新日志",
      //       link: "../version/1.0.0.md",
      //     },
      //   ],
      // },
    ],

    sidebar: [
      {
        text: "🚀 安装卸载",
        link: "/download.md",
      },
      // {
      //   text: "🚀 激活使用",
      //   link: "/activeuse.md",
      // },
      {
        text: "🌊 IP代理池",
        link: "/ipproxy.md",
      },
      {
        text: "🌈 无限多开",
        link: "/telegram_duokai.md",
      },
      {
        text: "💻 Proxifier",
        link: "/Proxifier-CN/README_CN.md",
      },
      {
        text: "账号管理",
        collapsed: false,
        items: [
          { text: "⚡️ 批量导入", link: "/account/upload.md" },
          { text: "🛡️ 账号管理", link: "/account/manages.md" },
          { text: "📞 手机号管理", link: "/account/phone.md" },
          { text: "📲 提取协议号", link: "/account/sessions.md" },
          { text: "🔎 账号信息", link: "/account/managesinfo.md" },
        ],
      },
      {
        text: "用户管理",
        collapsed: false,
        items: [
          { text: "🎓 用户列表", link: "/users/manage.md" },
          { text: "👩‍🔧 智能客服", link: "/users/AICustomerService.md" },
        ],
      },
      {
        text: "群组管理",
        collapsed: false,
        items: [
          { text: "👥 群组列表", link: "/group/list.md" },
          { text: "📡 群组监听", link: "/group/monitor.md" },
          { text: "🎯 定时群发（单个）", link: "/group/masstexting.md" },
          { text: "🎯 定时群发（批量）", link: "/group/batch_masstexting.md" },
          // { text: "🚀 批量创建", link: "/group/create.md" },
          { text: "🛠️ 批量采集（隐藏）", link: "/group/gather.md" },
          { text: "⛏️ 批量采集（可见）", link: "/group/gatherVisible.md" },
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
      {
        text: "账号说明",
        collapsed: false,
        link: "profile/readme.md",
        items: [
          {
            text: "如何在Windows上以TDATA格式登录Telegram账户？简单的分步指南！",
            link: "/profile/telegram-1.md",
          },
          {
            text: "在macOS和Linux上以TDATA格式登录Telegram账户的分步指南",
            link: "/profile/telegram-2.md",
          },
          {
            text: "购买后如何确保 Telegram 账户的安全？",
            link: "/profile/telegram-3.md",
          },
          // {
          //   text: "大规模账户验证和一键下载！ ",
          //   link: "/profile/telegram-4.md",
          // },
          {
            text: "高效正确地管理多个 Telegram 账户",
            link: "/profile/telegram-5.md",
          },
          {
            text: "工作Telegram账户时的重要注意事项：你需要知道的内容",
            link: "/profile/telegram-6.md",
          },
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

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/Tgxprox/TG-X-Pro" },
    // ],

    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2019-${new Date().getFullYear()} @Tgxprox`,
    },
  },
});
