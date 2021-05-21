<template>
  <div id="diagram-electric" class="diagram-electric g-diagram">
    <UiDiagramTitle
      text="用電狀況"
      :icon="require('@/static/images/icons/electric-icon.svg')"
    />

    <div class="g-diagram__board_wrapper">
      <BoardHandler
        boardType="number"
        :count="currentUsedPower"
        unit="萬瓩"
        :info="monthPeak"
        color="#F9C408"
      />

      <BoardHandler
        boardType="number"
        :count="currentGeneratedPower"
        unit="萬瓩"
        :info="['目前發電量']"
        color="#F9C408"
      />
    </div>

    <div
      class="diagram-electric__diagram g-diagram__folder"
      :class="{ hide: !isToggled }"
    >
      <!-- Paste Diagram component in here -->
      <div class="diagram-electric__diagram__line-chart-container">
        <LineChart :power="power" />
      </div>
    </div>
    <UiUpdateTime />
    <UiDiagramToggle :isToggled="isToggled" @click.native="toggleHandler" />
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import UiDiagramTitle from '~/components/UiDiagramTitle.vue'
import LineChart from '~/components/Power/LineChart.vue'
import gaMixin from '~/mixins/gaMixin'
export default {
  components: {
    UiDiagramTitle,
    LineChart,
  },
  mixins: [gaMixin],
  props: {
    power: {
      type: Object,
      isRequired: true,
      default: () => {
        return {}
      },
    },
  },

  data() {
    return {
      isToggled: false,
    }
  },

  computed: {
    monthPeak() {
      const monthPeak = this.power?.month_peak ?? 0
      const month = this.detectMonth()
      return ['目前用電量', `(歷年${month}月最高<b>${monthPeak}萬瓩</b>)`]
    },
    todayData() {
      return this.power?.power_24h_today ?? []
    },
    latestPowerData() {
      return this.todayData[this.todayData.length - 1]
    },
    currentUsedPower() {
      console.log(this.latestPowerData)
      return this.latestPowerData?.status['用電'] ?? 0
    },
    currentGeneratedPower() {
      return this.latestPowerData?.status['發電'] ?? 0
    },
  },

  mounted() {
    const scrollerCredit = scrollama()
    scrollerCredit
      .setup({
        step: '.diagram-electric',
        offset: 1,
      })
      .onStepExit((response) => {
        if (response.direction === 'up') return
        this.gaScrollHandler('用電狀況底部')
      })

    window.addEventListener('resize', scrollerCredit.resize)
  },

  methods: {
    toggleHandler() {
      this.isToggled = !this.isToggled
    },
    detectMonth() {
      const now = new Date()
      const months = '一,二,三,四,五,六,七,八,九,十,十一,十二'.split(',')
      return months[now.getMonth()]
    },
  },
}
</script>

<style lang="scss" scoped>
.diagram-electric {
  position: relative;
  &__diagram__line-chart-container {
    margin: 0 auto;
    width: 272px;
    @media (min-width: 768px) {
      width: 600px;
    }
  }
}
</style>
