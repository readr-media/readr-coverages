<template>
  <div class="hero">
    <h3 class="hero__sub_title"><span class="eng">READr</span> 民生情報站</h3>

    <h1 class="hero__title">
      疫情<span class="hero__title_dot" />供水<span
        class="hero__title_dot"
      />用電最新資訊
    </h1>

    <UiContinueUpdate />

    <p class="hero__content Body">
      <span class="eng">COVID-19</span>
      疫情持續延燒、能源轉型路漫漫、乾旱缺水衝擊民生與產業⋯⋯透過即時資料，READr
      帶你持續追蹤臺灣目前面臨的挑戰。
    </p>
  </div>
</template>

<script>
import UiContinueUpdate from '~/components/UiContinueUpdate'
export default {
  components: {
    UiContinueUpdate,
  },
}
</script>

<style lang="scss" scoped>
.hero {
  background: transparent;
  padding: 48px 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  // tablet range
  @include media-breakpoint-up(md) {
    padding: 48px 16px 48px;
  }

  // desktop range
  @include media-breakpoint-up(xl) {
    padding: 60px 16px 60px;
  }
  &__sub_title {
    color: #000928;
    opacity: 0.3;
  }

  &__title {
    margin-bottom: 24px;
    // tablet range
    @include media-breakpoint-up(md) {
      margin-bottom: 32px;
    }

    &_dot {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #000928;
      opacity: 0.3;
      margin: 0 16px 9px;
      @include media-breakpoint-up(md) {
        margin: 0 16px 15px;
      }
    }
  }

  .continue-update {
    margin: 0 auto 32px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 48px;
    }
  }

  &__content {
    max-width: 640px;
    margin: auto;
  }
}
</style>
