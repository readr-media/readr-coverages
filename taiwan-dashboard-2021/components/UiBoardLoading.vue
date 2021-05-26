<template>
  <div class="board-loading">
    <div v-if="boardCount === 0" class="g-diagram__board_wrapper">
      <div class="board-loading__empity_board colorAnimation"></div>
    </div>

    <div v-else class="g-diagram__board_wrapper">
      <UiBoardLoadingEmpityBoard />
      <UiBoardLoadingEmpityBoard />
      <UiBoardLoadingEmpityBoard v-if="boardCount !== 2" />
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
  props: {
    boardCount: {
      type: Number,
      default: 3,
    },
  },
  mounted() {
    console.log(this.boardCount)
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

  &__empity_board {
    height: 20px;
    width: 100%;
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
