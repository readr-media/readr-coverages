<template>
  <div class="result-tip">
    <p>{{ tip }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tip: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.result-tip {
  background-color: #ebf02c;
  border-radius: 6px;
  padding: 8px 12px;
  p {
    font-size: 16px;
    line-height: 1.5;
    color: #000928;
  }
}
</style>
