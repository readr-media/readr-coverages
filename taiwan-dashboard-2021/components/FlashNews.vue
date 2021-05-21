<template>
  <div class="flash-news">
    <h1 class="flash-news__title">快訊</h1>
    <FlashNewsCategory
      :flashNewsCategory="flashNewsCategory"
      :toggleHandler="toggleHandler"
    />

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
      flashNewsCategory: [
        {
          id: 0,
          icon: require('@/static/images/icons/covid-icon.svg'),
          title: '疫情',
          categoryTag: '疫情',
          isToggled: true,
        },
        {
          id: 1,
          icon: require('@/static/images/icons/electric-icon.svg'),
          title: '電力',
          categoryTag: '電',
          isToggled: true,
        },
        {
          id: 2,
          icon: require('@/static/images/icons/water-icon.svg'),
          title: '水情',
          categoryTag: '水',
          isToggled: true,
        },
      ],
    }
  },
  computed: {
    sortedFlashNews() {
      const passedCategory = []
      this.flashNewsCategory.forEach((category) => {
        if (category.isToggled) passedCategory.push(category.categoryTag)
      })
      const filteredNews = this.flashNewsList.filter((flashNews) => {
        return (
          flashNews.category === passedCategory[0] ||
          flashNews.category === passedCategory[1] ||
          flashNews.category === passedCategory[2]
        )
      })
      return filteredNews
    },
  },
  methods: {
    toggleHandler(categoryId) {
      this.flashNewsCategory[categoryId].isToggled = !this.flashNewsCategory[
        categoryId
      ].isToggled
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
