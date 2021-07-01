<template>
  <div class="result-injection">
    <div v-if="hasHowTo" class="result-injection__howto">
      <p>接種方式</p>
      <span v-for="(item, i) in formatHowTo" :key="`${item}-${i}`">
        {{ item.str1 }}<a :href="item.link" target="_blank">{{ item.str3 }}</a>
        {{ item.str4 }}
      </span>
    </div>
    <div v-if="hasInjectInfo" class="result-injection__second">
      <p>預計接種第二劑的時間</p>
      <span v-for="(item, i) in secondInjectTime" :key="`${item}-${i}`">
        {{ item }}
      </span>
    </div>
    <UiAnnounce v-if="hasInjectInfo" class="result-injection__announce" />
    <UiTimeStamp v-if="shouldShowTimeStamp" :timeStamp="timeStamp" />
  </div>
</template>

<script>
import { isArrayEmpty } from '~/utils/array-handler'
import { formatLinkText } from '~/utils/text-handler'
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
    howToLink: {
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
      return isArrayEmpty(this.howTo)
    },
    hasHowToLink() {
      return isArrayEmpty(this.howToLink)
    },
    formatHowTo() {
      return this.howTo.map((item, i) =>
        formatLinkText(item, this.howToLink[i])
      )
    },
    hasInjectInfo() {
      return isArrayEmpty(this.secondInjectTime)
    },
    shouldShowTimeStamp() {
      return this.timeStamp && (this.hasHowTo || this.hasInjectInfo)
    },
  },
}
</script>

<style lang="scss" scoped>
.result-injection {
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
  &__howto {
    margin: 0 0 12px;
    padding: 0 0 12px;
    border-bottom: 1px solid #e0e0e0;
  }
  &__second {
    margin: 0 0 12px;
  }
  &__announce {
    margin: 0 0 4px;
  }
}
</style>
