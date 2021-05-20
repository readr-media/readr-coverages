<template>
  <div id="diagram-covid-19" class="diagram-covid-19 g-diagram">
    <UiDiagramTitle
      engText="Civid-19 "
      text="疫情"
      :icon="require('@/static/images/icons/covid-icon.svg')"
    />
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
