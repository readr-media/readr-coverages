<template>
  <div class="city Body">
    <div class="city__key">
      <DiagramWaterCityListItemLevel :cityStatus="cityStatus" />
      <div class="city__name">
        <div class="city__name_main">{{ mainCityName }}</div>
        <div class="city__name_sub Caption">{{ subCityName }}</div>
      </div>
    </div>

    <div class="city__value">
      <span>{{ formatCityStatus }}</span>
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
    formatCityStatus() {
      if (this.cityStatus === '分區供水或定點供水') {
        return '分區或定點供水'
      } else return this.cityStatus
    },
    mainCityName() {
      const mainCityName = this.cityName.substring(0, 3)
      console.log(mainCityName)
      return mainCityName
    },
    subCityName() {
      const subCityName = this.cityName.substring(3, 10)
      return subCityName
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

  &__name {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &_main {
      margin-right: 4px;
    }

    &_sub {
      margin-bottom: -3px;
    }
  }
}
</style>
