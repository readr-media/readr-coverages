<template>
  <!-- eslint-disable vue/no-v-html -->
  <p class="html-content-block" v-html="contentBlock"></p>
</template>

<script>
export default {
  props: {
    contentBlock: {
      type: String,
      isRequired: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.html-content-block {
  background: transparent;
  margin-bottom: 32px;
}
</style>
