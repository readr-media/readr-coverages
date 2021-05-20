<template>
  <div class="diagram-covid-19 g-diagram">
    <UiDiagramTitle
      text="Civid-19 疫情"
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
