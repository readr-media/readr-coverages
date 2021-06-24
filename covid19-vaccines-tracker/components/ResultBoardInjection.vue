<template>
  <div class="result-injection">
    <div v-if="isA2" class="result-injection__a2">
      <p>施打方式</p>
      <span>請至<a :href="href" target="_blank">地方政府網站</a>預約</span>
    </div>
    <div v-if="hasInjectInfo" class="result-injection__other">
      <p>預計施打第二劑的時間</p>
      <span v-if="isA7">您無需預約，會由地方政府寄發通知單給您</span>
      <div class="result-injection__time">
        <span v-for="item in injectTime" :key="item">
          {{ item }}
        </span>
      </div>
    </div>
    <small class="result-injection__announce">
      僅為推估，實際情況以指揮中心為主
    </small>
    <small class="result-injection__timestamp">2021/6/22 更新</small>
  </div>
</template>

<script>
export default {
  props: {
    injectTime: {
      type: Array,
      default: () => [],
    },
    timeStamp: {
      type: String,
      required: true,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    isA7: {
      type: Boolean,
      default: false,
    },
    isA2: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasInjectInfo() {
      return (this.injectTime && this.injectTime.length) || this.isA7
    },
  },
}
</script>

<style lang="scss" scoped>
.result-injection {
  &__a2 {
    margin: 0 0 12px;
    padding: 0 0 12px;
    border-bottom: 1px solid #e0e0e0;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    color: #000928;
    opacity: 0.87;
    margin: 0 0 4px;
  }
  small {
    display: block;
    font-size: 14px;
    line-height: 21px;
    color: #000928;
    opacity: 0.3;
  }
  span {
    font-size: 18px;
    line-height: 1.5;
    color: #04295e;
    display: block;
    a {
      text-decoration: underline;
    }
  }
  &__time {
    margin: 0 0 12px;
  }
  &__timestamp {
    margin: 4px 0 0;
  }
}
</style>
