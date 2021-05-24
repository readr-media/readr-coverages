<template>
  <div class="color-level">
    <span class="color-level__title Body">各縣市最新新增病例數</span>

    <div class="color-level__bar">
      <div class="color-level__bar_color" />
      <div class="color-level__bar_text">
        <span>0</span>
        <span>{{ maxCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maxCount: {
      type: Number,
      isRequired: true,
      default: 100,
    },
  },
}
</script>

<style lang="scss" scoped>
.color-level {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin-bottom: 4px;
    font-family: 'Noto Sans CJK TC', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #000928;
    opacity: 0.87;
  }

  &__bar {
    &_color {
      background: linear-gradient(
        270deg,
        #e73e33 0%,
        rgba(231, 62, 51, 0.2) 100%
      );
      width: 248px;
      height: 16px;
      margin-bottom: 3px;
    }

    &_text {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
