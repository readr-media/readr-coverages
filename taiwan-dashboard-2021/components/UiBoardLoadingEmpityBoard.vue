<template>
  <div class="empity-board">
    <div class="empity-board__title colorAnimation"></div>
    <div class="empity-board__text colorAnimation"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.empity-board {
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    width: 120px;
    height: 60px;
    margin-bottom: 12px;
  }

  &__text {
    width: 180px;
    height: 20px;
  }
}
</style>
