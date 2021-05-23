<template>
  <div class="covid-city-title Body">
    <DiagramCovid19CityListItemWarningLevel
      :cityWarningLevel="cityWarningLevel"
    />
    <h5 class="covid-city-title__name">各縣市疫情警戒標準</h5>
  </div>
</template>

<script>
import DiagramCovid19CityListItemWarningLevel from '~/components/DiagramCovid19CityListItemWarningLevel.vue'
export default {
  components: {
    DiagramCovid19CityListItemWarningLevel,
  },
  props: {
    cityName: {
      type: String,
      isRequired: true,
      default: '',
    },
    cityPrevTotal: {
      type: Number,
      isRequired: true,
      default: 0,
    },
    cityToday: {
      type: Number,
      isRequired: true,
      default: 0,
    },
    cityWarningLevel: {
      type: Number,
      default: 3,
    },
  },

  computed: {
    count() {
      return `${this.cityPrevTotal}+${this.cityToday}例`
    },
  },
}
</script>

<style lang="scss" scoped>
.covid-city-title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__name {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #000928;
  }
}
</style>
