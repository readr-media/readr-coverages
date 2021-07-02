<template>
  <div class="remain-dose">
    <div class="remain-dose__title">
      <h4>我可以打殘劑嗎？</h4>
      <button type="button" @click="toggleMark">
        <img src="~static/images/question-mark.png" alt="question mark" />
      </button>
    </div>
    <p v-if="shouldShowInfo" class="remain-dose__info">
      疫苗開瓶至少要打 10
      人，若剛好把預約名單上的人都打完，剩下的劑量稱為殘劑。指揮中心 6/25
      授權地方政府可以自行決定殘劑如何運用。
    </p>
    <p class="remain-dose__content">
      {{ county }}的殘劑規定為：{{ formatDozeInfo.str1 }}
      <a :href="formatDozeInfo.link" target="_blank">
        {{ formatDozeInfo.str3 }}
      </a>
      {{ formatDozeInfo.str4 }}
    </p>
  </div>
</template>

<script>
import { formatLinkText } from '~/utils/text-handler'

export default {
  props: {
    county: {
      type: String,
      default: '',
    },
    dozeInfo: {
      type: String,
      default: '',
    },
    dozeInfoLink: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      shouldShowInfo: false,
    }
  },
  computed: {
    formatDozeInfo() {
      return formatLinkText(this.dozeInfo, this.dozeInfoLink)
    },
  },
  methods: {
    toggleMark() {
      this.shouldShowInfo = !this.shouldShowInfo
    },
  },
}
</script>

<style lang="scss" scoped>
.remain-dose {
  padding: 24px 20px;
  border-bottom: 2px solid #000928;
  @include media-breakpoint-up(md) {
    padding: 32px 40px;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 4px;
    h4 {
      font-size: 16px;
      line-height: 1.5;
      color: #000928;
      opacity: 0.5;
    }
    button {
      width: 19px;
      height: 19px;
      outline: none;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  &__info {
    font-size: 16px;
    line-height: 1.5;
    color: #000928;
    opacity: 0.5;
    margin: 4px 0;
  }
  &__content {
    font-size: 16px;
    line-height: 1.5;
    color: #000928;
    opacity: 0.87;
    a {
      text-decoration: underline;
    }
  }
}
</style>
