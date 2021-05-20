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
  </div>
</template>

<script>
import UiDiagramTitle from '~/components/UiDiagramTitle.vue'

export default {
  components: {
    UiDiagramTitle,
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
  },
}
</script>

<style lang="scss" scoped>
.diagram-covid-19 {
  position: relative;
}
</style>
