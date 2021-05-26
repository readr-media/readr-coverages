<template>
  <div class="diagram-main g-diagram">
    <UiDiagramTitle
      text="全臺最新資訊"
      :icon="require('@/static/images/icons/main-icon.svg')"
    />

    <UiBoardLoading v-if="true" />

    <div v-else class="g-diagram__board_wrapper">
      <BoardHandler
        boardType="multi-number"
        :leftCount="currentCovidCount"
        :rightCount="currentCovidDeathCount"
        unit="例"
        :isNeededPlus="true"
        :info="['今日新增本土確診數/死亡人數']"
        anchorId="diagram-covid-19"
      />
      <BoardHandler
        boardType="status"
        :status="currentElectricLoading"
        :info="['供電狀況']"
        anchorId="diagram-electric"
        :color="currentElectricStatusColor"
      />
      <BoardHandler
        boardType="region-status"
        :regionStatus="currentWaterStatus.info"
        :regions="currentWaterStatus.region"
        :color="currentWaterStatusColor"
        :info="['水情狀況']"
        anchorId="diagram-water"
      />
    </div>

    <UiUpdateTime :updateTime="updateTime" />
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import UiDiagramTitle from '~/components/UiDiagramTitle.vue'
import BoardHandler from '~/components/BoardHandler.vue'
import UiUpdateTime from '~/components/UiUpdateTime.vue'
import gaMixin from '~/mixins/gaMixin'
import UiBoardLoading from '~/components/UiBoardLoading'

export default {
  components: {
    UiDiagramTitle,
    BoardHandler,
    UiUpdateTime,
    UiBoardLoading,
  },
  mixins: [gaMixin],
  props: {
    currentCovidCount: {
      type: Number,
      isRequired: true,
      default: 0,
    },
    currentCovidDeathCount: {
      type: Number,
      isRequired: true,
      default: 0,
    },
    currentCovidDeathCount: {
      type: Number,
      isRequired: true,
      default: 1,
    },
    currentElectricLoading: {
      type: String,
      isRequired: true,
      default: '供電充裕',
    },
    currentElectricStatusColor: {
      type: String,
      isRequired: true,
      default: '#24c7bd',
    },
    currentWaterStatus: {
      type: Object,
      isRequired: true,
      default: () => {
        return {
          info: '分區或定點供水',
          region: '苗栗縣、台中市及彰化縣北部',
        }
      },
    },
    currentWaterStatusColor: {
      type: String,
      isRequired: true,
      default: '#24c7bd',
    },
    updateTime: {
      type: String,
      isRequired: true,
      default: '',
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
        this.gaScrollHandler('全台儀表板底部')
      })

    window.addEventListener('resize', scrollerCredit.resize)
  },
}
</script>

<style lang="scss" scoped>
.diagram-main {
  position: relative;

  .g-diagram__board_wrapper {
    min-height: 432px;
    // tablet range
    @include media-breakpoint-up(md) {
      min-height: 486px;
    }
    // desktop range
    @include media-breakpoint-up(xl) {
      min-height: auto;
    }
  }
}
</style>
