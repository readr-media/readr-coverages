<template>
  <div class="cover">
    <div class="cover__image">
      <img src="~static/images/cover-icon.png" alt="cover image" />
    </div>
    <div class="cover__content">
      <h1>我什麼時候可以打疫苗？</h1>
      <p>
        面對 COVID-19，臺灣疫苗陸續到貨，盼能在今年 10 月底之前達成 6
        成人口接種第一劑的「全體免疫」目標。READr
        統整所有最新接種資訊、接種方式、以及接種疫苗的常見問答，讓你即時掌握。
      </p>
    </div>
    <div class="cover__btns">
      <button
        type="button"
        class="g-primary-btn cover__btns--primary"
        @click="handleStart"
      >
        開始查詢
      </button>
      <button type="button" class="g-skip-btn" @click="handleSkip">
        直接看疫苗接種最新資訊
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    handleStart() {
      this.$emit('get-start')
    },
    handleSkip() {
      this.$emit('skip-to-result')
    },
  },
}
</script>

<style lang="scss" scoped>
.cover {
  max-width: 600px;
  margin: 0 auto;
  &__image {
    margin: 0 auto 12px;
    height: calc((100vw - 80px) / 3);
    max-width: 300px;
    max-height: 100px;
    img {
      width: 100%;
    }
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
