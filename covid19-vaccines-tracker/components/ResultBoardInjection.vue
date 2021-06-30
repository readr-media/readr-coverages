<template>
  <div class="result-injection">
    <div v-if="hasHowTo" class="result-injection__howTo">
      <p>接種方式</p>
      <span v-for="(item, i) in howTo" :key="`${item}-${i}`">
        {{ item }}
      </span>
    </div>
    <div v-if="hasInjectInfo" class="result-injection__second">
      <p>預計接種第二劑的時間</p>
      <span v-for="(item, i) in secondInjectTime" :key="`${item}-${i}`">
        {{ item }}
      </span>
    </div>
    <UiAnnounce v-if="hasInjectInfo" />
    <UiTimeStamp v-if="shouldShowTimeStamp" :timeStamp="timeStamp" />
  </div>
</template>

<script>
import UiAnnounce from '~/components/UiAnnounce.vue'
import UiTimeStamp from '~/components/UiTimeStamp.vue'

export default {
  components: {
    UiAnnounce,
    UiTimeStamp,
  },
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
    hasHowTo() {
      return this.howTo && this.howTo.length
    },
    hasInjectInfo() {
      return this.secondInjectTime && this.secondInjectTime.length
    },
    shouldShowTimeStamp() {
      return this.timeStamp && (this.hasInjectInfo || this.hasInjectInfo)
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
