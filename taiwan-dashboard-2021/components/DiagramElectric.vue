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
        :info="['目前用電量', '(歷年五月最高<b>3631.1萬瓩</b>)']"
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
      <LineChart />
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
  },

  data() {
    return {
      isToggled: false,
    }
  },

  computed: {
    currentUsedPower() {
      return 3652.5
    },
    currentGeneratedPower() {
      return 4027.5
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
  },
}
</script>

<style lang="scss" scoped>
.diagram-electric {
  position: relative;
}
</style>
