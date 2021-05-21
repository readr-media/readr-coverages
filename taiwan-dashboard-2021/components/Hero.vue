<template>
  <div class="hero">
    <h1 class="hero__title">
      持續更新！READr 民生情報站：疫情、供水、用電最新資訊
    </h1>

    <p class="hero__content Body">
      COVID-19
      疫情持續延燒、能源轉型路漫漫、乾旱缺水衝擊民生與產業⋯⋯透過即時資料，READr
      帶你持續追蹤臺灣目前面臨的挑戰。
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  background: transparent;
  padding: 48px 16px 24px;

  // tablet range
  @include media-breakpoint-up(md) {
    padding: 48px 16px 48px;
  }

  // desktop range
  @include media-breakpoint-up(xl) {
    padding: 60px 16px 60px;
  }

  &__title {
    margin-bottom: 24px;
  }

  &__content {
    max-width: 640px;
    margin: auto;
  }
}
</style>
