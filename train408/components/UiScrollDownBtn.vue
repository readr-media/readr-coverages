<template>
  <div class="scroll-down">
    <span><SvgArrowDown /></span>
  </div>
</template>

<script>
import SvgArrowDown from '~/assets/images/arrow-down.svg?inline'

export default {
  components: {
    SvgArrowDown,
  },
}
</script>

<style lang="scss" scoped>
.scroll-down {
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0 0 12px;
  width: 100vw;
  span {
    display: block;
    margin: 0 auto;
    width: 26px;
    height: 29px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
