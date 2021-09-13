<template>
  <div class="resource">
    <h2>{{ resourceTitle }}</h2>
    <p>{{ resourceDescription }}</p>
    <UiUnorderedList :contents="resourceListContents" />
  </div>
</template>

<script>
import UiUnorderedList from '~/components/UiUnorderedList.vue'

export default {
  components: {
    UiUnorderedList,
  },
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
    text-align: center;
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
