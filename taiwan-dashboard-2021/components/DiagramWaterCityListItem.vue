<template>
  <div class="city Body">
    <div class="city__key">
      <DiagramWaterCityListItemLevel :cityStatus="cityStatus" />
      <div class="city__name">{{ cityName }}</div>
    </div>

    <div class="city__value">
      <span>{{ cityStatus }}</span>
    </div>
  </div>
</template>

<script>
import DiagramWaterCityListItemLevel from '~/components/DiagramWaterCityListItemLevel.vue'
export default {
  components: {
    DiagramWaterCityListItemLevel,
  },
  props: {
    cityName: {
      type: String,
      isRequired: true,
      default: '',
    },
    cityStatus: {
      type: String,
      isRequired: true,
      default: '',
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
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 9, 40, 0.1);
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
}
</style>
