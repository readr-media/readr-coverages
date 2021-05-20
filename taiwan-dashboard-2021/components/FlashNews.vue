<template>
  <div class="flash-news">
    <h1 class="flash-news__title">快訊</h1>
    <FlashNewsCategory :setCurrentCategoryName="setCurrentCategoryName" />

    <div class="flash-news__container">
      <FlashNewsCard
        v-for="flashNews in sortedFlashNews"
        :key="flashNews['update_time']"
        :flashNews="flashNews"
      />
    </div>

    <UiButton title="展開所有快訊" />
  </div>
</template>

<script>
import FlashNewsCategory from '~/components/FlashNewsCategory.vue'
import FlashNewsCard from '~/components/FlashNewsCard.vue'
import UiButton from '~/components/UiButton.vue'

export default {
  components: { FlashNewsCategory, FlashNewsCard, UiButton },
  props: {
    flashNewsList: {
      type: Array,
      isRequired: true,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      flashNewsCategory: {},
      currentCategoryName: '疫情',
    }
  },
  computed: {
    sortedFlashNews() {
      return this.flashNewsList.filter((flashNews) => {
        return flashNews.category === this.currentCategoryName
      })
    },
  },
  methods: {
    setCurrentCategoryName(categoryId) {
      let categoryName = ''
      switch (categoryId) {
        case 0:
          categoryName = '疫情'
          break
        case 1:
          categoryName = '電'
          break
        case 2:
          categoryName = '水'
          break

        default:
          categoryName = '疫情'
          break
      }
      this.currentCategoryName = categoryName
    },
  },
}
</script>

<style lang="scss" scoped>
.flash-news {
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__container {
    max-width: 640px;
    margin: auto;
  }
}
</style>
