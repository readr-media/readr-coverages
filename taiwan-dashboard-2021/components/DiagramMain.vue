<template>
  <div class="diagram-main g-diagram">
    <UiDiagramTitle
      engText="2021 "
      text="台灣儀表板"
      :icon="require('@/static/images/icons/main-icon.svg')"
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
.diagram-main {
  position: relative;
}
</style>
