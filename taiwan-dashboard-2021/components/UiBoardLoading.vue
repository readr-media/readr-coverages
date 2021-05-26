<template>
  <div class="board-loading">
    <div class="g-diagram__board_wrapper">
      <UiBoardLoadingEmpityBoard />
      <UiBoardLoadingEmpityBoard />
      <UiBoardLoadingEmpityBoard />
    </div>

    <div class="board-loading__content colorAnimation"></div>
  </div>
</template>

<script>
import UiBoardLoadingEmpityBoard from '~/components/UiBoardLoadingEmpityBoard'

export default {
  component: {
    UiBoardLoadingEmpityBoard,
  },
}
</script>

<style lang="scss" scoped>
.board-loading {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  // tablet range
  @include media-breakpoint-up(md) {
    margin-bottom: 24px;
  }

  .g-diagram__board_wrapper {
    width: 100%;
  }

  &__content {
    width: 120px;
    height: 16px;
  }
}
</style>
