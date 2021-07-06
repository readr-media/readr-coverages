<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="result-tip" v-html="formatTip" />
</template>

<script>
import { formatLinkText } from '~/utils/text-handler'

export default {
  props: {
    tip: {
      type: String,
      required: true,
      default: '',
    },
    tipLink: {
      type: String,
      default: '',
    },
  },
  computed: {
    formatTip() {
      return formatLinkText(this.tip, this.tipLink)
    },
  },
}
</script>

<style lang="scss" scoped>
.result-tip {
  background-color: #ebf02c;
  border-radius: 6px;
  padding: 8px 12px;
  span {
    font-size: 16px;
    line-height: 1.5;
    color: #000928;
    a {
      text-decoration: underline;
    }
  }
}
</style>
