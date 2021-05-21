<template>
  <div class="warning-level" :style="{ background: backgroundHandler }"></div>
</template>

<script>
export default {
  props: {
    cityStatus: {
      type: String,
      default: '供水充沛',
    },
  },
  computed: {
    backgroundHandler() {
      switch (this.cityStatus) {
        case '供水充沛':
          return '#000928'

        case '水情提醒':
          return '#24C7BD'

        case '減量供水':
          return '#F9C408'

        case '減壓供水':
          return '#F97C08'

        case '分區或定點供水':
          return '#E73E33'

        default:
          return '#000928'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.warning-level {
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-right: 8px;
}
</style>
