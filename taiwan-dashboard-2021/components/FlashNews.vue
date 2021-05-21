<template>
  <div class="flash-news">
    <h1 class="flash-news__title">快訊</h1>
    <FlashNewsCategory
      :flashNewsCategory="flashNewsCategory"
      :toggleHandler="toggleHandler"
    />
    <div class="flash-news__container">
      <FlashNewsCard
        v-for="index in showedFlashNewsCount"
        :key="index - 1"
        :flashNews="sortedFlashNews[index - 1]"
      />
    </div>

    <UiButton
      v-if="showReadMore"
      title="展開所有快訊"
      @click.native="expandHandler"
    />
  </div>
</template>

<script>
import FlashNewsCategory from '~/components/FlashNewsCategory.vue'
import FlashNewsCard from '~/components/FlashNewsCard.vue'
import UiButton from '~/components/UiButton.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: { FlashNewsCategory, FlashNewsCard, UiButton },
  mixins: [gaMixin],
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
      flashCount: 3,
    }
  },

  computed: {
    sortedFlashNews() {
      const passedCategory = []
      this.flashNewsCategory.forEach((category) => {
        if (category.isToggled) passedCategory.push(category.categoryTag)
      })
      const filteredNewsByCategory = this.flashNewsList.filter((flashNews) => {
        return (
          flashNews.category === passedCategory[0] ||
          flashNews.category === passedCategory[1] ||
          flashNews.category === passedCategory[2]
        )
      })

      return filteredNewsByCategory
    },

    showReadMore() {
      return this.flashCount < this.sortedFlashNews.length
    },

    showedFlashNewsCount() {
      return this.flashCount > this.sortedFlashNews.length
        ? this.sortedFlashNews.length
        : this.flashCount
    },
  },

  methods: {
    toggleHandler(categoryId) {
      this.flashCount = 3
      this.flashNewsCategory[categoryId].isToggled = !this.flashNewsCategory[
        categoryId
      ].isToggled
    },

    expandHandler() {
      const newFlashCount =
        this.flashCount + 5 > this.sortedFlashNews.length
          ? this.sortedFlashNews.length
          : this.flashCount + 5

      this.flashCount = newFlashCount
      this.gaClickHandler('展開所有快訊')
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
