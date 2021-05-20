<template>
  <div class="hero">
    <h1 class="hero__title">大標題</h1>

    <p class="hero__content">
      上北洲開出邊到獨好……人數法管經我她容型正臺？球加手是以就。次然是可我一決，代體上個臺同們些石樣良望應這動意是華大生象著於各排養是的一馬經統熱作態眼經時只美；地出子，遊道那收失念還弟政們他完？年來得？及學中變上。李把常益處正身麼保頭著化巴半現成重是。
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
