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
      <div class="diagram-covid-19__diagram_col_wrapper">
        <TaiwanMap
          :countyFillColorConfig="countyFillColorConfig"
          style="height: 500px"
        />

        <UiColorLevel :maxCount="cityMaxCount" />
      </div>

      <div class="diagram-covid-19__diagram_col_wrapper">
        <UiCovidCityListTitle />

        <DiagramCovid19CityList
          :cityList="totalCityList"
          :class="{ expand: isToggled }"
        />
      </div>
    </div>

    <UiUpdateTime :updateTime="updateTime" />
    <UiDiagramToggle :isToggled="isToggled" @click.native="toggleHandler" />
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import { handleTaiWord } from '~/utils/text-handler'
import { mapColorHandler } from '~/utils/diagram-handler'
import UiDiagramTitle from '~/components/UiDiagramTitle.vue'
import TaiwanMap from '~/components/TaiwanMap/TaiwanMap.vue'
import UiColorLevel from '~/components/UiColorLevel.vue'
import DiagramCovid19CityList from '~/components/DiagramCovid19CityList.vue'
import UiDiagramToggle from '~/components/UiDiagramToggle.vue'
import UiUpdateTime from '~/components/UiUpdateTime.vue'
import gaMixin from '~/mixins/gaMixin'
import UiCovidCityListTitle from '~/components/UiCovidCityListTitle.vue'

export default {
  components: {
    UiDiagramTitle,
    TaiwanMap,
    UiColorLevel,
    DiagramCovid19CityList,
    UiDiagramToggle,
    UiUpdateTime,
    UiCovidCityListTitle,
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
      const taiwanLevel = this.covid?.taiwan_level
      switch (taiwanLevel) {
        case 3:
          return '第三級警戒'

        case 2:
          return '第二級警戒'

        case 1:
          return '第一級警戒'

        default:
          return '警戒解除'
      }
    },
    totalCityList() {
      return this.covid.city
    },
    countyFillColorConfig() {
      const taiwanTodayTotal = this.covid?.today
      const taiwanTodayCityMax = this.cityMaxCount

      const configArray = []
      this.covid?.city?.forEach((city) => {
        configArray.push({
          name: handleTaiWord(city?.city_name),
          color: mapColorHandler(city, taiwanTodayTotal, taiwanTodayCityMax),
          opacity: 1,
          hoverInfo: {
            title: handleTaiWord(city?.city_name),
            description: `今日確診 ${city?.city_today} 例`,
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
    cityMaxCount() {
      const cityList = this.covid?.city || [100]
      const max = Math.max(...cityList.map((city) => city.city_today))

      return max
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

  &__diagram_col_wrapper {
    // height: 465px;
    margin-bottom: 24px;
    padding-top: 24px;
    &:first-child {
      margin-bottom: 0;
    }
    // tablet range
    @include media-breakpoint-up(md) {
      padding-top: 16px;
      margin-bottom: 32px;
      &:first-child {
        margin-bottom: 0;
      }
    }

    .color-level {
      margin-top: -53px;
    }

    .covid-city-title {
      padding-top: 16px;
      margin-bottom: 24px;
    }
  }

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

  .g-diagram__board_wrapper {
    min-height: 436px;
    // tablet range
    @include media-breakpoint-up(md) {
      min-height: 484px;
    }
    // desktop range
    @include media-breakpoint-up(xl) {
      min-height: auto;
    }
  }
}
</style>
