<template>
  <div class="warning-level" :style="{ background: backgroundHandler }">
    {{ cityWarningLevel }}
  </div>
</template>

<script>
export default {
  props: {
    cityWarningLevel: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    backgroundHandler() {
      switch (this.cityWarningLevel) {
        case 3:
          return 'rgba(231, 62, 51, 0.8)'

        case 2:
          return 'rgba(231, 62, 51, 0.3)'

        case 1:
          return 'rgba(231, 62, 51, 0.2)'

        case 0:
          return 'rgba(231, 62, 51, 0.1)'

        default:
          return 'rgba(231, 62, 51, 1)'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.warning-level {
  width: 16px;
  height: 16px;
  font-size: 14px;
  color: white;
  border-radius: 2px;
  background: rgba(231, 62, 51, 0.8);
  line-height: 16px;
  text-align: center;
  margin-right: 12px;
}
</style>
