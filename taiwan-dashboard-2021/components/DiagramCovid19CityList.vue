<template>
  <div class="city-list">
    <DiagramCovid19CityListItem
      v-for="(city, index) in cityList"
      :key="index"
      :cityName="city.cityName"
      :cityPrevTotal="city.cityPrevTotal"
      :cityToday="1"
      :cityWarningLevel="3"
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
}
</style>
