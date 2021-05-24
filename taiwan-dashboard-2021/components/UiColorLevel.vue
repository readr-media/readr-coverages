<template>
  <div class="color-level">
    <span class="color-level__title Body">各縣市最新新增病例數</span>

    <div class="color-level__bar">
      <div class="color-level__bar_color">
        <div class="color-level__bar_color_0" />
        <div class="color-level__bar_color_1" />
        <div class="color-level__bar_color_2" />
        <div class="color-level__bar_color_3" />
        <div class="color-level__bar_color_4" />
        <div class="color-level__bar_color_5" />
      </div>

      <div class="color-level__bar_text">
        <span>0</span>
        <span>{{ maxCount }}</span>
      </div>

      <div v-if="isBacklog" class="color-level__bar_prompt">
        ※ 今日縣市新增病例數包括前幾日的校正回歸數
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
    isBacklog: {
      type: Boolean,
      isRequired: true,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.color-level {
  width: 248px;
  margin: auto;
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
      width: 248px;
      height: 16px;
      margin-bottom: 3px;
      display: flex;
      align-items: stretch;
      & > div {
        flex: 1;
      }

      &_0 {
        background: rgba(0, 9, 40, 0.1);
      }
      &_1 {
        background: rgba(231, 62, 51, 0.2);
      }
      &_2 {
        background: rgba(231, 62, 51, 0.4);
      }
      &_3 {
        background: rgba(231, 62, 51, 0.6);
      }
      &_4 {
        background: rgba(231, 62, 51, 0.8);
      }
      &_5 {
        background: rgba(231, 62, 51, 1);
      }
    }

    &_text {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
    }

    &_prompt {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #000928;
      opacity: 0.5;
    }
  }
}
</style>
