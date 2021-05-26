<template>
  <div id="diagram-water" class="diagram-water g-diagram">
    <UiDiagramTitle
      text="最新水情"
      :icon="require('@/static/images/icons/water-icon.svg')"
    />

    <UiBoardLoading v-if="isLoadingData" :boardCount="0" />
    <div v-else class="loaded-block">
      <DiagramWaterCityList :cityList="cityWarningList" />

      <div
        class="diagram-electric__diagram g-diagram__folder"
        :class="{ hide: !isToggled }"
      >
        <!-- Paste Diagram component in here -->
        <div>
          <h1 class="water-title">北部水庫蓄水量</h1>
          <div class="bubbles-wrapper">
            <ReservoirBubbles
              v-if="!shouldShowWaterDataAreaNorth"
              :key="'north-main'"
              class="bubbles-wrapper__bubbles"
              :data="waterDataNorthMain"
            />
            <ReservoirBubbles
              v-else
              :key="'north-area'"
              class="bubbles-wrapper__bubbles"
              :data="waterDataNorth"
              :height="640"
            />
            <button
              class="water-button"
              @click="
                shouldShowWaterDataAreaNorth = !shouldShowWaterDataAreaNorth
              "
            >
              {{
                shouldShowWaterDataAreaNorth ? '收合' : '展開'
              }}所有北部民生用水水庫
              <img
                :src="
                  shouldShowWaterDataAreaNorth ? waterFoldIcon : waterExpandIcon
                "
                alt=""
              />
            </button>
          </div>
        </div>
        <div>
          <h1 class="water-title">中部水庫蓄水量</h1>
          <div class="bubbles-wrapper">
            <ReservoirBubbles
              v-if="!shouldShowWaterDataAreaMiddle"
              :key="'middle-main'"
              class="bubbles-wrapper__bubbles"
              :data="waterDataMiddleMain"
            />
            <ReservoirBubbles
              v-else
              :key="'middle-area'"
              class="bubbles-wrapper__bubbles"
              :data="waterDataMiddle"
              :height="640"
            />
            <button
              class="water-button"
              @click="
                shouldShowWaterDataAreaMiddle = !shouldShowWaterDataAreaMiddle
              "
            >
              {{
                shouldShowWaterDataAreaMiddle ? '收合' : '展開'
              }}所有中部民生用水水庫
              <img
                :src="
                  shouldShowWaterDataAreaMiddle
                    ? waterFoldIcon
                    : waterExpandIcon
                "
                alt=""
              />
            </button>
          </div>
        </div>
        <div>
          <h1 class="water-title">南部水庫蓄水量</h1>
          <div class="bubbles-wrapper">
            <ReservoirBubbles
              v-if="!shouldShowWaterDataAreaSouth"
              :key="'south-main'"
              class="bubbles-wrapper__bubbles"
              :data="waterDataSouthMain"
            />
            <ReservoirBubbles
              v-else
              :key="'south-area'"
              class="bubbles-wrapper__bubbles"
              :data="waterDataSouth"
              :height="700"
            />
            <button
              class="water-button"
              @click="
                shouldShowWaterDataAreaSouth = !shouldShowWaterDataAreaSouth
              "
            >
              {{
                shouldShowWaterDataAreaSouth ? '收合' : '展開'
              }}所有南部民生用水水庫
              <img
                :src="
                  shouldShowWaterDataAreaSouth ? waterFoldIcon : waterExpandIcon
                "
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <UiUpdateTime style="margin: 30px 0 0 0" :updateTime="updateTime" />
      <UiDiagramToggle :isToggled="isToggled" @click.native="toggleHandler" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import scrollama from 'scrollama'
import 'intersection-observer'
import ReservoirBubbles from './ReservoirBubbles.vue'
import UiDiagramTitle from '~/components/UiDiagramTitle.vue'
import DiagramWaterCityList from '~/components/DiagramWaterCityList.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    UiDiagramTitle,
    DiagramWaterCityList,
    ReservoirBubbles,
  },
  mixins: [gaMixin],
  props: {
    isLoadingData: {
      type: Boolean,
      isRequired: true,
      default: true,
    },
    water: {
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

      reservoirSupportList: [
        '新竹-永和山水庫',
        '苗栗-鯉魚潭水庫',
        '彰雲投-石岡壩',
        '嘉義-曾文水庫',
        '嘉義-烏山頭水庫',
        '高雄-高屏堰',
      ],
      shouldShowWaterDataAreaNorth: false,
      shouldShowWaterDataAreaMiddle: false,
      shouldShowWaterDataAreaSouth: false,
      waterFoldIcon: require('@/static/images/icons/water-fold.svg'),
      waterExpandIcon: require('@/static/images/icons/water-expand.svg'),
    }
  },
  computed: {
    cityWarningList() {
      const tempCityList = _.cloneDeep(this.water?.warning) || []
      const container = []
      // 將太長的city分成兩個 ex 台中市及彰化縣北部地區
      tempCityList.forEach((city) => {
        const location = city.location.split('及')
        if (location.length > 1) {
          container.push({ ...city, location: location[1] })
          city.location = location[0]
        }
      })
      return tempCityList.concat(container)
    },
    waterDataNorthMain() {
      return this.getWaterDataBy('main', '北部')
    },
    waterDataNorth() {
      return this.getWaterDataBy('area', '北部')
    },
    waterDataMiddleMain() {
      return this.getWaterDataBy('main', '中部')
    },
    waterDataMiddle() {
      return this.getWaterDataBy('area', '中部')
    },
    waterDataSouthMain() {
      return this.getWaterDataBy('main', '南部')
    },
    waterDataSouth() {
      return this.getWaterDataBy('area', '南部')
    },
  },
  mounted() {
    const scrollerCredit = scrollama()
    scrollerCredit
      .setup({
        step: '.diagram-water',
        offset: 1,
      })
      .onStepExit((response) => {
        if (response.direction === 'up') return
        this.gaScrollHandler('用水狀況底部')
      })

    window.addEventListener('resize', scrollerCredit.resize)
  },
  methods: {
    toggleHandler() {
      this.isToggled = !this.isToggled
    },

    getWaterDataBy(category, area) {
      if (category === 'area') {
        return Object.entries(this.water?.status?.[area]?.[category] ?? {})
          .map(this.mapWaterDataToChart)
          .flat()
      } else if (category === 'main') {
        return (this.water?.status?.[area]?.[category] ?? []).map(
          (reservoir) => {
            return {
              nameArea: '',
              nameReservoir: reservoir?.reservoirName?.data,
              size: Number(reservoir?.effectiveCapacity?.data),
              percentage: Number(
                reservoir?.effectiveWaterStorageStoragePercentage?.data.replace(
                  '%',
                  ''
                )
              ),
              isSupportReservoir: false,
            }
          }
        )
      }
    },
    mapWaterDataToChart(value) {
      const [areaName, reservoirs] = value
      return reservoirs
        .map((reservoir) => {
          return {
            nameArea: areaName,
            nameReservoir: reservoir?.reservoirName?.data,
            size: Number(reservoir?.effectiveCapacity?.data),
            percentage: Number(
              reservoir?.effectiveWaterStorageStoragePercentage?.data.replace(
                '%',
                ''
              )
            ),
            isSupportReservoir: this.reservoirSupportList.includes(
              `${areaName}-${reservoir?.reservoirName?.data}`
            ),
          }
        })
        .flat()
    },
  },
}
</script>

<style lang="scss" scoped>
.diagram-water {
  position: relative;

  .g-diagram__board_wrapper {
    min-height: 237px;
    // tablet range
    @include media-breakpoint-up(md) {
      min-height: 265px;
    }
    // desktop range
    @include media-breakpoint-up(xl) {
      min-height: auto;
    }
  }
}

.water-title {
  font-size: 24px;
  margin: 60px 0 0 0;
}
.bubbles-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.water-button {
  display: flex;
  align-items: center;
  color: #000928;
  opacity: 0.5;
  img {
    margin: 0 0 0 8px;
  }
}
</style>
