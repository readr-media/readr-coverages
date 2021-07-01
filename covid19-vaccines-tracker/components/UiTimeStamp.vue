<template>
  <small>{{ formatTime }} 更新</small>
</template>

<script>
export default {
  props: {
    timeStamp: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    formatTime() {
      return this.timeStamp
        ? this.timeStamp.split(' ')[0].split('-').join('/')
        : ''
    },
  },
}
</script>

<style lang="scss" scoped>
small {
  display: block;
  font-size: 14px;
  line-height: 21px;
  color: #000928;
  opacity: 0.3;
}
</style>
