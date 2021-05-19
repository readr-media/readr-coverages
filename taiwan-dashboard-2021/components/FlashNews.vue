<template>
  <div class="flash-news">
    <h1 class="flash-news__title">快訊</h1>
    <FlashNewsCategory :setCurrentCategoryId="setCurrentCategoryId" />
  </div>
</template>

<script>
import FlashNewsCategory from '~/components/FlashNewsCategory.vue'

export default {
  components: { FlashNewsCategory },
  data() {
    return {
      flashNewsCategory: {},
      currentCategoryId: 0,
    }
  },
  methods: {
    setCurrentCategoryId(categoryId) {
      this.currentCategoryId = categoryId
    },
  },
}
</script>

<style lang="scss" scoped>
.flash-news {
  background: transparent;
}
</style>
