<template>
  <div class="city-list">
    <DiagramWaterCityListItem
      v-for="(city, index) in cityList"
      :key="index"
      :cityName="city.location"
      :cityStatus="city.status"
      :class="{ row1: index < 12 }"
    />
  </div>
</template>

<script>
import DiagramWaterCityListItem from '~/components/DiagramWaterCityListItem.vue'
export default {
  components: {
    DiagramWaterCityListItem,
  },
  props: {
    cityList: {
      type: Array,
      isRequired: true,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.city-list {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  user-select: none;
  margin-top: 40px;
  // tablet range
  @include media-breakpoint-up(md) {
    height: 457px;
  }

  // desktop range
  @include media-breakpoint-up(xl) {
    min-width: 530px;
  }

  & > div {
    width: 100%;

    // tablet range
    @include media-breakpoint-up(md) {
      width: calc(50% - 24px);
    }
  }

  .row1 {
    // tablet range
    @include media-breakpoint-up(md) {
      margin-right: 48px;
    }
  }
}
</style>
