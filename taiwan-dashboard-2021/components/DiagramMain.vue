<template>
  <div class="diagram-main g-diagram">
    <UiDiagramTitle
      text="全台儀表板"
      :icon="require('@/static/images/icons/main-icon.svg')"
    />

    <div class="g-diagram__wrapper">
      <BoardHandler
        boardType="number"
        :count="currentCovidCount"
        unit="例"
        :isNeededPlus="true"
        info="今日新增本土確診數"
        anchorId="diagram-covid-19"
      />
      <BoardHandler
        boardType="status"
        :status="currentElectricLoading"
        info="供電狀況"
        anchorId="diagram-electric"
        color="#F9C408"
      />
      <BoardHandler
        boardType="region-status"
        :regionStatus="currentWaterStatus.info"
        :regions="currentWaterStatus.regions"
        info="水情狀況"
        anchorId="diagram-water"
      />
    </div>
  </div>
</template>

<script>
import UiDiagramTitle from '~/components/UiDiagramTitle.vue'
import BoardHandler from '~/components/BoardHandler.vue'

export default {
  components: {
    UiDiagramTitle,
    BoardHandler,
  },
  props: {
    currentCovidCount: {
      type: Number,
      isRequired: true,
      default: 254,
    },
    currentElectricLoading: {
      type: String,
      isRequired: true,
      default: '供電吃緊',
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
  },
}
</script>

<style lang="scss" scoped>
.diagram-main {
  position: relative;
}
</style>
