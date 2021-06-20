<template>
  <div class="secondary-btn">
    <button type="button">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.secondary-btn {
  button {
    width: 100%;
    max-width: 320px;
    background-color: #04295e;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 1.5;
    border-radius: 6px;
    outline: none;
    padding: 12px;
  }
}
</style>
