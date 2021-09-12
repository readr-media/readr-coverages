<template>
  <div class="extra">
    <h2>{{ extraTitle }}</h2>
    <UiUnorderedList :contents="extraListContents" />
  </div>
</template>

<script>
import UiUnorderedList from '~/components/UiUnorderedList.vue'

export default {
  components: {
    UiUnorderedList,
  },
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
    text-align: center;
    margin: 0 0 24px;
    @include media-breakpoint-up(md) {
      font-size: 32px;
      line-height: 44px;
      margin: 0 0 40px;
    }
  }
}
</style>
