<template>
  <div class="flash-news-category">
    <div class="flash-news-category__wrapper">
      <UiCategoryButton
        v-for="category in flashNewsCategory"
        :key="category.id"
        :icon="category.icon"
        :title="category.title"
        :isToggled="category.isToggled"
        @click.native="toggleHandler(category.id)"
      />
    </div>
  </div>
</template>

<script>
import UiCategoryButton from '~/components/UiCategoryButton.vue'
export default {
  components: { UiCategoryButton },
  props: {
    flashNewsCategory: {
      type: Array,
      isRequired: true,
      default: () => {
        return [
          {
            id: 0,
            icon: require('@/static/images/icons/covid-icon.svg'),
            title: '疫情',
            isToggled: true,
          },
          {
            id: 1,
            icon: require('@/static/images/icons/electric-icon.svg'),
            title: '電力',
            isToggled: true,
          },
          {
            id: 2,
            icon: require('@/static/images/icons/water-icon.svg'),
            title: '水情',
            isToggled: true,
          },
        ]
      },
    },
    toggleHandler: {
      type: Function,
      isRequired: true,
      default: () => {
        return null
      },
    },
  },
  data() {
    return {}
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
