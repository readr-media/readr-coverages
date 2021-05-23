<template>
  <div id="diagram-electric" class="diagram-electric g-diagram">
    <UiDiagramTitle
      text="目前用電狀況"
      :icon="require('@/static/images/icons/electric-icon.svg')"
    />

    <div class="g-diagram__board_wrapper">
      <BoardHandler
        boardType="number"
        :count="currentUsedPower"
        unit="萬瓩"
        :info="monthPeak"
        :color="currentElectricStatusColor"
      />

      <BoardHandler
        boardType="number"
        :count="currentGeneratedPower"
        unit="萬瓩"
        :isNeededPoint="true"
        :info="['目前最大供電量']"
        :color="currentElectricStatusColor"
      />
    </div>

    <div
      class="diagram-electric__diagram g-diagram__folder"
      :class="{ hide: !isToggled }"
    >
      <!-- Paste Diagram component in here -->
      <div class="diagram-electric__diagram__line-chart-container">
        <LineChart
          :power="power"
          :currentElectricLoading="currentElectricLoading"
          :currentElectricStatusColor="currentElectricStatusColor"
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
    updateTime: {
      type: String,
      isRequired: true,
      default: '',
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
  },

  data() {
    return {
      isToggled: false,
    }
  },

  computed: {
    monthPeak() {
      let monthPeak = this.power?.month_peak ?? 0
      monthPeak = monthPeak.toFixed(1)
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
      return this.latestPowerData?.status['用電'] ?? 0
    },
    currentGeneratedPower() {
      return this.latestPowerData?.status['最大供電'] ?? 0
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
    margin: 0 auto 24px;
    width: 248px;
    @media (min-width: 344px) {
      width: 272px;
    }
    @media (min-width: 768px) {
      width: 540px;
    }
    @media (min-width: 830px) {
      width: 600px;
    }
  }
}
</style>
