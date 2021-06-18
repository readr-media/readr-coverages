<template>
  <div class="hero">
    <h3 class="hero__sub_title"><span class="eng">READr</span> 疫苗專題</h3>

    <p class="hero__content Body">
      <span class="eng">COVID-19</span>
      假字假字
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
