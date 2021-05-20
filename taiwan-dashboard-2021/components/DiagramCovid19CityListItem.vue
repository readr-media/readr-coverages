<template>
  <div class="city Body">
    <div class="city__key">
      <DiagramCovid19CityListItemWarningLevel
        :cityWarningLevel="cityWarningLevel"
      />
      <div class="city__name">{{ cityName }}</div>
    </div>

    <div class="city__value">
      <span>{{ cityPrevTotal }}</span>
      <span>+</span>
      <span>{{ cityToday }}</span>
      <span>例</span>
    </div>
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
.city {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }

  &__value > span {
    &:last-child {
      margin-left: 4px;
    }
  }
}
</style>
