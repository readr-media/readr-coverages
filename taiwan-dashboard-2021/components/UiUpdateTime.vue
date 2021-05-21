<template>
  <div class="update-time">
    <span class="update-time__title">{{ updateTime }}</span>
  </div>
</template>

<script>
export default {
  props: {
    updateTime: {
      type: String,
      isRequired: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.update-time {
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #000928;
  opacity: 0.3;
  padding-bottom: 24px;

  // tablet range
  @include media-breakpoint-up(md) {
    padding-bottom: 0;
  }
}
</style>
