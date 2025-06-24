<!-- PricingPage.vue -->
<template>
  <div class="pricing-page">
    <div class="pricing-container">
      <SubscriptionCard
        v-for="version in versions"
        :key="version.name"
        :version="version"
        :border-color="version.color"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SubscriptionCard from "./SubscriptionCard.vue";

const Base = [
  "🌊 IP代理池",
  "⚡️ 批量导入",
  "🛡️ 账号管理",
  "🔎 账号信息",
  "🎓 用户列表",
  "📡 群组监听",
  "📞 手机号采集TG用户",
  "⛏️ 批量采集（可见）",
  "🎯 定时群发（单个）",
  "🤖 单个强拉",
  "🤝 批量加群",
  "🧠 批量私信",
  "🌐 批量转发",
  "👥 群组在线监听（无需登陆）",
  "🌟 智能客服",
  "🌟 批量创建",
  "🌟 批量采集（隐藏）",
  "🌟 定时群发（批量）",
  "🌟 批量强拉",
  "🌟 提取协议号",
];

const Advanced = [
  ...Base,
  "💎 多入口代理",
  "💎 TDATA登陆",
  "💎 TG无限多开",
  "💎 一键生成 Proxifier 配置文件",
];

const SuperVip = [
  ...Advanced,
  "🚚 送永久 Proxifier 中文版本",
  "🚚 送 3500 ➕ 万人搜索群组",
  "🚚 送 500 ➕ 万人交流群组",
];

// 版本配置
const versions = ref([
  {
    name: "月卡",
    color: "#3b82f6",
    priceMultiplier: 149,
    equipment: {
      quarterly: 2, // 季度 2 台设备
      yearly: 4, // 年度 4 台设备
    },
    features: Base,
  },
  {
    name: "季卡",
    color: "#8b5cf6",
    priceMultiplier: 401, // 比基础版高30%
    equipment: {
      quarterly: 3, // 季度 3 台设备
      yearly: 5, // 年度 5 台设备
    },
    features: Advanced,
  },
  {
    name: "年卡",
    color: "#f59e0b",
    priceMultiplier: 1426, // 比高级版再高10%
    equipment: {
      quarterly: 5, // 季度 3 台设备
      yearly: 7, // 年度 5 台设备
    },
    features: SuperVip,
  },
]);
</script>

<style scoped>
.pricing-container {
  display: grid;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .pricing-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>