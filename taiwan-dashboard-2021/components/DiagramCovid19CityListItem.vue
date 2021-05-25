<template>
  <div class="city Body">
    <div class="city__key">
      <DiagramCovid19CityListItemWarningLevel
        :cityWarningLevel="cityWarningLevel"
      />
      <h5 class="city__name">{{ cityName }}</h5>
    </div>

    <div class="city__value">
      <span class="number">{{ cityPrevTotal }}</span>
      <span class="number">+</span>
      <span class="number">{{ cityToday }}</span>
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
  border-bottom: 1px solid rgba(0, 9, 40, 0.1);
  padding: 2px 0;
  &:last-child {
    border-bottom: none;
  }
  & > div {
    display: flex;
    align-items: center;
  }

  &__value > span {
    &:last-child {
      margin-left: 4px;
    }
  }

  &__name {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #000928;
  }

  .number {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: right;
    color: #000928;
  }
}
</style>
