<template>
  <div id="article-resource" class="resource">
    <h2>{{ resourceTitle }}</h2>
    <p>{{ resourceDescription }}</p>
    <UiUnorderedList :contents="resourceListContents" />
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
    resourceTitle: {
      type: String,
      default: '',
    },
    resourceDescription: {
      type: String,
      default: '',
    },
    resourceListContents: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    const scrollerCredit = scrollama()
    scrollerCredit
      .setup({
        step: '#article-resource',
      })
      .onStepEnter((response) => {
        if (response.direction === 'down') {
          this.gaScrollHandler('to 這個報導使用到的資料')
        }
      })
    window.addEventListener('resize', scrollerCredit.resize)
  },
}
</script>

<style lang="scss" scoped>
.resource {
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
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 36px;
    color: #e0e0e0;
    margin: 0 0 32px;
  }
}
</style>
