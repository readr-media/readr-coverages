<template>
  <div class="result-injection">
    <div v-if="isA2 || isA7" class="result-injection__a2">
      <p>接種方式</p>
      <span v-for="(item, i) in howTo" :key="`${item}-${i}`">
        {{ item }}
      </span>
    </div>
    <div v-if="hasInjectInfo" class="result-injection__other">
      <p>預計接種第二劑的時間</p>
      <span v-if="isA2">您無需預約，會由地方政府寄發通知單給您</span>
      <div class="result-injection__time">
        <span v-for="(item, i) in secondInjectTime" :key="`${item}-${i}`">
          {{ item }}
        </span>
      </div>
      <small class="result-injection__announce">
        僅為推估，實際情況以指揮中心為主
      </small>
    </div>
    <small class="result-injection__timestamp">{{ timeStamp }}</small>
  </div>
</template>

<script>
export default {
  props: {
    secondInjectTime: {
      type: Array,
      default: () => [],
    },
    timeStamp: {
      type: String,
      required: true,
      default: '',
    },
    howTo: {
      type: Array,
      default: () => [],
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
      return (
        (this.secondInjectTime && this.secondInjectTime.length) || this.isA2
      )
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
