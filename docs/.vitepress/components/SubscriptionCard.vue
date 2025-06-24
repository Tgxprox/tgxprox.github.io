<!-- SubscriptionCard.vue -->
<template>
  <div class="subscription-card" :style="{ borderColor: borderColor }">
    <div class="subscription-card-box">
      <h1 class="version-title">{{ version.name }}</h1>

      <!-- 月度基础价 -->
      <div class="base-price">
        <div class="monthly-price">
          ${{ monthlyPrice.toFixed(0) }}
        </div>
        <!-- <div class="price-compare">季度优惠 10%｜年度优化20%</div> -->
      </div>

      <!-- 周期价格 -->
      <!-- <div class="period-prices">
          <span class="period-label"
            >1 台设备
          </span>
      </div> -->

      <!-- 功能列表 -->
      <div class="features">
        <div class="features-title">
          包含功能：{{ version.features.length }} +
        </div>
        <ul>
          <li v-for="(feature, index) in version.features" :key="index">
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>

    <a href="https://t.me/tgxproc" target="_blank" rel="noopener noreferrer">
      <button class="subscribe-btn">
        立即订阅
      </button>
    </a>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  version: Object,
  borderColor: String,
});


// 当前版本月单价
const monthlyPrice = computed(
  () => props.version.priceMultiplier
);

</script>

<style scoped>
/* 优化后的样式 */
.subscription-card {
  border: 3px solid;
  border-radius: 1rem;
  padding: 2rem;
  background: white;
  transition: transform 0.2s;
}

.subscription-card-box {
  height: 95%;
}

.version-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.base-price {
  margin-bottom: 2rem;
}

.monthly-price {
  font-size: 2.5rem;
  font-weight: bold;
  color: #3b82f6;
}

.price-unit {
  font-size: 1rem;
  color: #64748b;
}

.price-compare {
  color: #64748b;
  font-size: 0.9rem;
}

.period-prices {
  margin: 2rem 0;
}

.period-item {
  margin: 1.5rem 0;
  position: relative;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.period-label {
  font-size: 1.1rem;
  color: #475569;
}

.price-group {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.original-price {
  text-decoration: line-through;
  color: #94a3b8;
}

.final-price {
  font-size: 1.4rem;
  font-weight: 500;
  color: #10b981;
}

.discount-tag {
  position: absolute;
  right: 0;
  top: -0.8rem;
  background: #ef4444;
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
}

.features {
  border-top: 1px solid #e2e8f0;
  padding-top: 1.5rem;
}

.features-title {
  color: #475569;
  margin-bottom: 1rem;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
}

.features li:before {
  content: "✓";
  color: #10b981;
  margin-right: 0.8rem;
}

.subscribe-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: opacity 0.2s;
}

.subscribe-btn:hover {
  opacity: 0.9;
}
</style>