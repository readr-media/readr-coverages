<template>
  <section class="cover">
    <div id="cover-start" />
    <div class="cover__intro">
      <div class="cover__intro__intro1">
        <p>
          2021 年 4 月 2 日上午 9 時 28 分，太魯閣 408
          次列車駛出和仁隧道南口時，撞到軌道上異物後出軌，造成 2 名司機、47
          名乘客死亡，213 人受傷。
        </p>
      </div>
    </div>
    <div class="cover__intro">
      <div class="cover__intro__intro2">
        <h2>
          【重建太魯閣出軌事發現場】失控的鐵道安全：臺鐵改革為什麼一直失靈？
        </h2>
        <p>
          此專題利用 3D
          建模、監視器畫面、插畫等元素嘗試重建事發現場，往下滑動來觀看。
          <a v-smooth-scroll href="#article-start" @click="handleSkip">
            若回顧事發現場的細節會讓您感到不適，請點此跳過。
          </a>
        </p>
      </div>
    </div>
    <div id="cover-end" />
  </section>
</template>

<script>
export default {
  methods: {
    handleSkip() {
      this.$emit('skip-content')
    },
  },
}
</script>

<style lang="scss" scoped>
.cover {
  &__intro {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    &__intro1 {
      width: 208px;
      @include media-breakpoint-up(md) {
        width: 448px;
      }
    }
    &__intro2 {
      width: 240px;
      @include media-breakpoint-up(md) {
        width: 480px;
      }
    }
    h2 {
      font-size: 28px;
      font-weight: 500;
      line-height: 36px;
      color: #e0e0e0;
      margin: 0 0 48px;
      @include media-breakpoint-up(md) {
        font-size: 32px;
        line-height: 44px;
      }
    }
    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      color: #fff;
      @include media-breakpoint-up(md) {
        font-size: 18px;
        line-height: 36px;
      }
      a {
        color: #ebf02c;
        text-decoration: underline;
        text-decoration-color: #ebf02c;
        text-underline-offset: 2px;
      }
    }
  }
}
</style>
