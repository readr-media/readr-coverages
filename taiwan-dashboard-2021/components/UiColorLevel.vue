<template>
  <div class="color-level">
    <span class="color-level__title Body">各縣市累積本土確診數</span>

    <div class="color-level__bar">
      <div class="color-level__bar_color" />
      <div class="color-level__bar_text">
        <span>min</span>
        <span>max</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.color-level {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin-bottom: 4px;
  }

  &__bar {
    &_color {
      background: linear-gradient(
        270deg,
        #e73e33 0%,
        rgba(231, 62, 51, 0.2) 100%
      );
      width: 248px;
      height: 16px;
      margin-bottom: 3px;
    }

    &_text {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
