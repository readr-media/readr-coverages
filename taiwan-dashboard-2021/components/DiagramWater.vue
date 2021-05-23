<template>
  <div id="diagram-water" class="diagram-water g-diagram">
    <UiDiagramTitle
      text="最新水情"
      :icon="require('@/static/images/icons/water-icon.svg')"
    />

    <DiagramWaterCityList :cityList="cityWarningList" />

    <div
      class="diagram-electric__diagram g-diagram__folder"
      :class="{ hide: !isToggled }"
    >
      <!-- Paste Diagram component in here -->
    </div>
    <UiUpdateTime :updateTime="updateTime" />
    <UiDiagramToggle :isToggled="isToggled" @click.native="toggleHandler" />
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import UiDiagramTitle from '~/components/UiDiagramTitle.vue'
import DiagramWaterCityList from '~/components/DiagramWaterCityList.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    UiDiagramTitle,
    DiagramWaterCityList,
  },
  mixins: [gaMixin],
  props: {
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
  computed: {
    cityWarningList() {
      const tempCityList = this.water?.warning || []
      const container = []
      // 將太長的city分成兩個 ex 台中市及彰化縣北部地區
      tempCityList.forEach((city) => {
        const location = city.location.split('及')
        if (location.length > 1) {
          container.push({ ...city, location: location[1] })
          city.location = location[0]
        }
      })
      tempCityList.concat(container)
      return tempCityList
    },
  },
  data() {
    return {
      isToggled: false,
    }
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
  },
}
</script>

<style lang="scss" scoped>
.diagram-water {
  position: relative;
}
</style>
