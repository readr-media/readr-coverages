<template>
  <div class="flash-news-category">
    <div class="flash-news-category__wrapper">
      <UiCategoryButton
        v-for="category in flashNewsCategory"
        :key="category.id"
        :icon="category.icon"
        :title="category.title"
        @click.native="setCurrentCategoryName(category.id)"
      />
    </div>
  </div>
</template>

<script>
import UiCategoryButton from '~/components/UiCategoryButton.vue'
export default {
  components: { UiCategoryButton },
  props: {
    setCurrentCategoryName: {
      type: Function,
      isRequired: true,
      default: () => {
        return '疫情'
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
        },
        {
          id: 1,
          icon: require('@/static/images/icons/electric-icon.svg'),
          title: '電力',
        },
        {
          id: 2,
          icon: require('@/static/images/icons/water-icon.svg'),
          title: '水情',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.flash-news-category {
  background: transparent;
  margin: 32px auto 41px;

  &__wrapper {
    display: flex;
    justify-content: center;

    & > div {
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
