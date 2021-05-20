<template>
  <div id="diagram-covid-19" class="diagram-covid-19 g-diagram">
    <UiDiagramTitle
      engText="Civid-19 "
      text="疫情"
      :icon="require('@/static/images/icons/covid-icon.svg')"
    />

    <div class="g-diagram__wrapper">
      <BoardHandler
        boardType="number"
        :count="currentCovidCount"
        unit="例"
        :isNeededPlus="true"
        info="今日新增本土確診數"
      />

      <BoardHandler
        boardType="number"
        :count="totalCovidCount"
        unit="例"
        info="累積本土確診數"
      />
      <BoardHandler
        boardType="status"
        :status="currentWarningLevel"
        info="目前全國疫情警戒標準"
      />
    </div>

    <div class="diagram-covid-19__diagram">
      <TaiwanMap
        :countyFillColorConfig="[
          {
            name: '花蓮縣',
            color: '#123456',
            opacity: 0.3,
            hoverInfo: {
              title: '南投縣',
              description: '今日確診 1 例',
            },
          },
          {
            name: '台北市',
            color: 'red',
            opacity: 1,
            hoverInfo: {
              title: '範例標題',
              description: '範例敘述',
            },
          },
          {
            name: '澎湖縣',
            color: 'red',
            opacity: 1,
            hoverInfo: {
              title: '範例標題',
              description: '範例敘述',
            },
          },
        ]"
        style="height: 500px"
      />

      <DiagramCovid19CityList :cityList="totalCityList" />
    </div>
  </div>
</template>

<script>
import UiDiagramTitle from '~/components/UiDiagramTitle.vue'
import TaiwanMap from '~/components/TaiwanMap/TaiwanMap.vue'
import DiagramCovid19CityList from '~/components/DiagramCovid19CityList.vue'

export default {
  components: {
    UiDiagramTitle,
    TaiwanMap,
    DiagramCovid19CityList,
  },
  props: {
    covid: {
      type: Object,
      isRequired: true,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    currentCovidCount() {
      return this.covid?.today
    },
    totalCovidCount() {
      return this.covid?.today
    },
    currentWarningLevel() {
      return '第三級警戒'
    },
    totalCityList() {
      const cityObj = this.covid?.city || []
      const cityArrayTemp = Object.entries(cityObj)

      const cityList = cityArrayTemp.map(([key, value]) => {
        return {
          cityName: key,
          cityPrevTotal: value,
        }
      })

      return cityList
    },
  },
}
</script>

<style lang="scss" scoped>
.diagram-covid-19 {
  position: relative;
}
</style>
