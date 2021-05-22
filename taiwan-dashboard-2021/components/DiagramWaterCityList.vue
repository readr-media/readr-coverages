<template>
  <div class="city-list">
    <DiagramWaterCityListItem
      v-for="(city, index) in sortedCityList"
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
  computed: {
    sortedCityList() {
      const sortCityList = this.cityList
      sortCityList.forEach((city) => {
        let order
        switch (city.status) {
          case '供水充沛':
            order = 5
            break

          case '水情提醒':
            order = 4
            break

          case '減量供水':
            order = 3
            break

          case '減壓供水':
            order = 2
            break

          case '分區供水或定點供水':
            order = 1
            break

          default:
            order = 5
            break
        }
        city.order = order
      })

      sortCityList.sort(function (a, b) {
        if (a.order > b.order) return 1
        if (a.order < b.order) return -1
        return 0
      })

      return sortCityList
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
