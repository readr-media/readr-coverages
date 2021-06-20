<template>
  <div class="landing-page">
    <div class="landing-page__image"></div>
    <div class="landing-page__content">
      <h1>我什麼時候可以打疫苗？</h1>
      <p>
        COVID-19
        疫情持續延燒、能源轉型路漫漫、乾旱缺水衝擊民生與產業⋯⋯透過即時資料，READr
        帶你持續追蹤臺灣目前面臨的挑戰。
      </p>
    </div>
    <div class="landing-page__btns">
      <PrimaryBtn :text="'開始查詢'" class="landing-page__btns--primary" />
      <SkipBtn />
    </div>
  </div>
</template>

<script>
import PrimaryBtn from '~/components/PrimaryBtn.vue'
import SkipBtn from '~/components/SkipBtn.vue'

export default {
  components: {
    PrimaryBtn,
    SkipBtn,
  },
}
</script>

<style lang="scss" scoped>
.landing-page {
  max-width: 600px;
  margin: 0 auto;
  &__image {
    background-color: #c4c4c4;
    margin: 0 auto 12px;
    height: calc((100vw - 80px) / 3);
    max-width: 300px;
    max-height: 100px;
  }
  &__content {
    h1 {
      margin: 0 auto 32px;
      @include media-breakpoint-up(md) {
        margin: 0 auto 40px;
      }
    }
    p {
      font-size: 18px;
      line-height: 2;
      color: #000928;
      margin: 0 0 32px;
      @include media-breakpoint-up(md) {
        margin: 0 0 40px;
      }
    }
  }
  &__btns {
    width: 100%;
    text-align: center;
    &--primary {
      margin: 0 auto 24px;
    }
  }
}
</style>
