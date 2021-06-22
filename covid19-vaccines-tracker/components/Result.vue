<template>
  <div class="result">
    <div class="result__info">
      <ResultBoard />
      <EmailBoard />
      <div class="result__info-btn">
        <button type="button" class="g-skip-btn" @click="handleSeachAgain">
          重新查詢
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ResultBoard from '~/components/ResultBoard.vue'
import EmailBoard from '~/components/EmailBoard.vue'

export default {
  components: {
    ResultBoard,
    EmailBoard,
  },
  methods: {
    handleSeachAgain() {
      console.log('serach')
    },
  },
}
</script>

<style lang="scss" scoped>
.result {
  width: calc(100% + 24px);
  transform: translateX(-12px);
  margin: 8px 0 28px;
  min-height: calc(100vh - 224px - 36px);
  @include media-breakpoint-up(md) {
    margin: 60px 0 52px;
    min-height: calc(100vh - 240px - 112px);
  }
  @include media-breakpoint-up(lg) {
    margin: 60px 0 60px;
    min-height: calc(100vh - 152px - 120px);
  }
  &__info {
    border: 2px solid #000928;
    border-radius: 6px;
    max-width: 640px;
    margin: 0 auto;
    &-btn {
      margin: 24px 0 20px;
      text-align: center;
      @include media-breakpoint-up(md) {
        margin: 24px 0 32px;
      }
    }
  }
}
</style>
