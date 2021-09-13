<template>
  <div class="video__close">
    <button type="button" @click="handleClose">回時間軸</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$emit('clicked-close')
    },
  },
}
</script>

<style lang="scss" scoped>
.video__close {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 300px;
    padding: 12px 0;
    text-align: center;
    font-size: 16px;
    line-height: 1.2;
    color: #fff;
    border: 1px solid #fff;
  }
}
</style>
