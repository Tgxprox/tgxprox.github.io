<template>
  <div class="card-title">
    准备好体验性价比最高的Telegram营销工具了吗？立即解锁它吧
  </div>
  <div class="card-title-item">
    ⚡️限⚡️时⚡️免⚡️费⚡️测⚡️试⚡️
  </div>

  <div class="cardlist">
    <div v-for="item in cardlist" :key="item" :class="'carditem'">
      <div class="carditem-titile">
        <h1>
          {{ item.type }}
          /
          {{ item.price }}
          $

          <span v-if="item.favorable" class="carditem-favorable">
            已优惠
            {{ item.favorable }}
            %
          </span>
        </h1>
      </div>
      <div class="carditem-content">
        <div v-for="(listitem) in item.list" :key="listitem"  class="css-175oi2r r-18jsvk2 r-1adg3ll r-18u37iz r-5oul0u">
          <div
            dir="ltr"
            class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41"
          >
            <span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
              >
              {{listitem}}
              </span
            >
          </div>
                    <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1gs4q39"
          >
            <g>
              <path
                d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      <a href="http://t.me/tgxproc" class="pay-but" target="_blank" rel="noopener noreferrer">立即订阅</a>

    </div>
  </div>
</template>

<script setup>
const cardlist = [
  {
    type: "天",
    price: "5",
        list:[
        '🌊 IP代理池',
        '⚡️ 批量导入',
        '🛡️ 账号管理',
        '🔎 账号信息',
        '🎓 用户列表',
        '👩‍🔧 智能客服',
        '📡 群组监听',
        '🛠️ 批量采集（隐藏）',
        '⛏️ 批量采集（可见）',
        '🤖 批量强拉',
        '🤝 批量加群',
        '🧠 批量私信',
        '🌐 批量转发',
    ]
  },
  {
    type: "月",
    price: "99",
        list:[
        '🌊 IP代理池',
        '⚡️ 批量导入',
        '🛡️ 账号管理',
        '🔎 账号信息',
        '🎓 用户列表',
        '👩‍🔧 智能客服',
        '📡 群组监听',
        '🛠️ 批量采集（隐藏）',
        '⛏️ 批量采集（可见）',
        '🤖 批量强拉',
        '🤝 批量加群',
        '🧠 批量私信',
        '🌐 批量转发',
    ]
  },
  {
    type: "季",
    price: "267",
    favorable: "10",
        list:[
        '🌊 IP代理池',
        '⚡️ 批量导入',
        '🛡️ 账号管理',
        '🔎 账号信息',
        '🎓 用户列表',
        '👩‍🔧 智能客服',
        '📡 群组监听',
        '🛠️ 批量采集（隐藏）',
        '⛏️ 批量采集（可见）',
        '🤖 批量强拉',
        '🤝 批量加群',
        '🧠 批量私信',
        '🌐 批量转发',
    ]
  },
  {
    type: "年",
    price: "950",
    favorable: "20",
        list:[
        '🌊 IP代理池',
        '⚡️ 批量导入',
        '🛡️ 账号管理',
        '🔎 账号信息',
        '🎓 用户列表',
        '👩‍🔧 智能客服',
        '📡 群组监听',
        '🛠️ 批量采集（隐藏）',
        '⛏️ 批量采集（可见）',
        '🤖 批量强拉',
        '🤝 批量加群',
        '🧠 批量私信',
        '🌐 批量转发',

    ]
  },
];
</script>

<style scoped>
.card-title {
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 3rem;
  background: linear-gradient(90deg, #3b82f6, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-title-item {
      width: 100%;
  height: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
    font-weight: 600;
  font-size: 1.5rem;
    color: #979797;

}

.cardlist {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.carditem {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-width: 280px;
  max-width: 280px;
  /* min-height: 600px; */
  /* background: #f0f3f4; */
  background: var(--vp-c-bg-soft);
  transform: scale(0.9);
  padding: 1rem;
  border-radius: 1rem;
  align-content: space-between;
}
.css-175oi2r {
    display: flex;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: .5rem;
}
.carditem-titile {
  width: 100%;
  height: 10%;
  text-align: center;
}
.carditem-favorable {
  font-size: 18px;
  color: #979797;
}
.carditem-content {
  width: 100%;

  height: 75%;
color: var(    --vp-c-text-1);
  padding-bottom: 1rem;
}
.r-1xvli5t {
        height: 1.25em;
}
.css-146c3p1 {
    flex: 1;
}

.r-4qtqp9 {
    fill: var(    --vp-c-text-1);

}
.pay-but {
  width: 100%;
  display: flex;
  justify-content: center;
align-items: center;
  height: 5rem;
  font-size: 2rem;
  font-weight: 800;
  border-radius: 1rem;
  text-decoration: none;
  color: #101419;
  background: #ffffff;
}

.pay-but:hover {
  color: #ffffff;
  background: #101419;
}
.pay-but:active {
  opacity: 0.9;
}

</style>
