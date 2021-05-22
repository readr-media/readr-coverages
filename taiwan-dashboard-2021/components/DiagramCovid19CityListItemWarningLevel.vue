<template>
  <div class="warning-level" :style="{ background: backgroundHandler }">
    {{ cityWarningLevel }}
  </div>
</template>

<script>
import { colorHandler } from '~/utils/diagram-handler'

export default {
  props: {
    cityWarningLevel: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    backgroundHandler() {
      return colorHandler(this.cityWarningLevel)
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
