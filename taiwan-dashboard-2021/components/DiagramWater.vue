<template>
  <div class="diagram-covid-19 g-diagram">
    <UiDiagramTitle icon="" text="用水狀況" />
  </div>
</template>

<script>
import UiDiagramTitle from '~/components/UiDiagramTitle.vue'

export default {
  components: {
    UiDiagramTitle,
  },
}
</script>

<style lang="scss" scoped>
.diagram-covid-19 {
  position: relative;
}
</style>
