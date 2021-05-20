<template>
  <div class="city-list">
    <DiagramCovid19CityListItem
      v-for="(city, index) in cityList"
      :key="index"
      :cityName="city.cityName"
      :cityPrevTotal="city.cityPrevTotal"
      :cityToday="1"
      :cityWarningLevel="3"
      :class="{ row1: index < 12 }"
    />
  </div>
</template>

<script>
import DiagramCovid19CityListItem from '~/components/DiagramCovid19CityListItem.vue'
export default {
  components: {
    DiagramCovid19CityListItem,
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
