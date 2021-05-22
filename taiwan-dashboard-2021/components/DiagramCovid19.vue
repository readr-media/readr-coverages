<template>
  <div id="diagram-covid-19" class="diagram-covid-19 g-diagram">
    <UiDiagramTitle
      engText="Covid-19 "
      text="最新疫情"
      :icon="require('@/static/images/icons/covid-icon.svg')"
    />

    <div class="g-diagram__board_wrapper">
      <BoardHandler
        boardType="number"
        :count="currentCovidCount"
        unit="例"
        :isNeededPlus="true"
        :info="['今日新增本土確診數']"
      />

      <BoardHandler
        boardType="number"
        :count="totalCovidCount"
        unit="例"
        :info="['累積本土確診數']"
      />
      <BoardHandler
        boardType="status"
        :status="currentWarningLevel"
        :info="['目前全國疫情警戒標準']"
      />
    </div>

    <div
      class="diagram-covid-19__diagram g-diagram__folder"
      :class="{ hide: !isToggled }"
    >
      <TaiwanMap
        :countyFillColorConfig="countyFillColorConfig"
        style="height: 500px"
      />

      <DiagramCovid19CityList
        :cityList="totalCityList"
        :class="{ expand: isToggled }"
      />
    </div>
    <UiUpdateTime :updateTime="updateTime" />
    <UiDiagramToggle :isToggled="isToggled" @click.native="toggleHandler" />
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import { handleTaiWord } from '~/utils/text-handler'
import { colorHandler } from '~/utils/diagram-handler'
import UiDiagramTitle from '~/components/UiDiagramTitle.vue'
import TaiwanMap from '~/components/TaiwanMap/TaiwanMap.vue'
import DiagramCovid19CityList from '~/components/DiagramCovid19CityList.vue'
import UiDiagramToggle from '~/components/UiDiagramToggle.vue'
import UiUpdateTime from '~/components/UiUpdateTime.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    UiDiagramTitle,
    TaiwanMap,
    DiagramCovid19CityList,
    UiDiagramToggle,
    UiUpdateTime,
  },
  mixins: [gaMixin],
  props: {
    covid: {
      type: Object,
      isRequired: true,
      default: () => {
        return {}
      },
    },
    updateTime: {
      type: String,
      isRequired: true,
      default: '',
    },
  },
  data() {
    return {
      isToggled: false,
    }
  },
  computed: {
    currentCovidCount() {
      return this.covid?.today
    },
    totalCovidCount() {
      return this.covid?.taiwan_total
    },
    currentWarningLevel() {
      return '第三級警戒'
    },
    totalCityList() {
      return this.covid.city
    },
    countyFillColorConfig() {
      const configArray = []
      this.covid?.city?.forEach((city) => {
        configArray.push({
          name: handleTaiWord(city.city_name),
          color: colorHandler(city.city_warning_level || 3),
          opacity: 1,
          hoverInfo: {
            title: handleTaiWord(city.city_name),
            description: `今日確診 ${city.city_today} 例`,
          },
        })
      })

      return configArray
      // return [
      //   {
      //     name: '花蓮縣',
      //     color: '#123456',
      //     opacity: 0.3,
      //     hoverInfo: {
      //       title: '南投縣',
      //       description: '今日確診 1 例',
      //     },
      //   },
      //   {
      //     name: '台北市',
      //     color: 'red',
      //     opacity: 1,
      //     hoverInfo: {
      //       title: '範例標題',
      //       description: '範例敘述',
      //     },
      //   },
      //   {
      //     name: '澎湖縣',
      //     color: 'red',
      //     opacity: 1,
      //     hoverInfo: {
      //       title: '範例標題',
      //       description: '範例敘述',
      //     },
      //   },
      // ]
    },
  },
  mounted() {
    const scrollerCredit = scrollama()
    scrollerCredit
      .setup({
        step: '.diagram-covid-19',
        offset: 1,
      })
      .onStepExit((response) => {
        if (response.direction === 'up') return
        this.gaScrollHandler('Covid-19 疫情底部')
      })

    window.addEventListener('resize', scrollerCredit.resize)
  },
  methods: {
    toggleHandler() {
      this.isToggled = !this.isToggled
    },
  },
}
</script>

<style lang="scss" scoped>
.diagram-covid-19 {
  position: relative;

  &__diagram {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    // desktop range
    @include media-breakpoint-up(xl) {
      flex-direction: row;
      justify-content: space-between;

      & > :first-child {
        flex: 9;
      }

      & > :last-child {
        flex: 11;
      }
    }
  }
}
</style>
