<template>
  <div class="social-list">
  <div class="iframe-box">
    <!-- 动态组件渲染 -->
    <iframe v-if="props.type === 'IP代理'"  width="688" height="385" src="https://www.youtube.com/embed/fIC80UXcbjQ?si=mSAg5Yr7UG9eseOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe v-if="props.type === '批量加群'"  width="688" height="385"  src="https://www.youtube.com/embed/LgQpJaswfbM?si=7gTkC6BEhmTc7PFx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe v-if="props.type === '批量私信'"  width="688" height="385" src="https://www.youtube.com/embed/bo8NCCHfufs?si=jl1zsSdCoPgoQkx5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe v-if="props.type === '批量转发'"  width="688" height="385" src="https://www.youtube.com/embed/bo8NCCHfufs?si=jl1zsSdCoPgoQkx5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe v-if="props.type === '批量强拉'"  width="688" height="385" src="https://www.youtube.com/embed/mqlqS3sT_1g?si=gRvXmZOzPbLBAErW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe v-if="props.type === '采集隐藏'"  width="688" height="385" src="https://www.youtube.com/embed/k4DFzRAX2aw?si=jOQeaSblu3mzFulL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
    <ul>
      <li
        v-for="(item) in socialItems"
        :key="item.name"
        class="social-item"
        :style="{ '--hover-color': colors[item.name] }"
      >
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          <span class="platform">{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

const socialItems = ref([
  { name: 'Telegram', url: 'https://t.me/tgxproc' },
  { name: 'YouTube', url: 'https://youtube.com/@tgxproy?si=9xD97Ysit8W5w21L' },
  { name: 'FaceBook', url: 'https://www.facebook.com/profile.php?id=61574752421705' },
  { name: 'Twitter', url: 'https://x.com/Tgxprox' },
  { name: 'TikTok', url: 'https://t.me/tgxproc' },
  { name: '哔哩哔哩', url: 'https://t.me/tgxproc' }
])

const colors = {
  'Telegram': '#0088cc',
  'FaceBook': '#0088cc',
  'YouTube': '#ff0000',
  'Twitter': '#1da1f2',
  'TikTok': '#ff0050',
  '哔哩哔哩': '#fb7299'
}
</script>

<style scoped>
.social-list {
  font-family: Arial, sans-serif;
}

.iframe-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

li {
  margin-top: 0 !important;
}

.social-item {
  transition: transform 0.3s ease;
}

.social-item:hover {
  transform: translateY(-3px);
}

a {
  display: flex;
  align-items: center;
  padding: 5px 20px;
  border-radius: 8px;
  background: #f5f5f5;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
}

a:hover {
  background: var(--hover-color);
  color: white;
}

.icon {
  margin-right: 12px;
  display: flex;
  align-items: center;
}

.platform {
  font-weight: 500;
}
</style>