<template>
  <div id="article-extra" class="extra">
    <h2>{{ extraTitle }}</h2>
    <UiUnorderedList :contents="extraListContents" />
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import gaMixin from '~/mixins/gaMixin'
import UiUnorderedList from '~/components/UiUnorderedList.vue'

export default {
  components: {
    UiUnorderedList,
  },
  mixins: [gaMixin],
  props: {
    extraTitle: {
      type: String,
      default: '',
    },
    extraListContents: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    const scrollerCredit = scrollama()
    scrollerCredit
      .setup({
        step: '#article-extra',
      })
      .onStepEnter((response) => {
        if (response.direction === 'down') {
          this.gaScrollHandler('to 如果你關心這個議題')
        }
      })
    window.addEventListener('resize', scrollerCredit.resize)
  },
}
</script>

<style lang="scss" scoped>
.extra {
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
  h2 {
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    color: #e0e0e0;
    text-align: left;
    margin: 0 0 24px;
    @include media-breakpoint-up(md) {
      font-size: 32px;
      line-height: 44px;
      margin: 0 0 40px;
    }
  }
}
</style>
