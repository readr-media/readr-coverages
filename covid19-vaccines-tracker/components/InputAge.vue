<template>
  <div class="input-age">
    <div class="input-age__input">
      <label for="age">1. 你的年齡？</label>
      <input id="age" v-model="age" type="number" placeholder="28" />
    </div>
    <div class="input-age__btns">
      <button
        type="button"
        :class="[shouldShowNextBtn ? 'g-primary-btn' : 'g-disabled-btn']"
        class="input-age__btns--primary"
        @click="goToNextPage"
      >
        下一步
      </button>
      <button
        type="button"
        class="g-secondary-btn input-age__btns--secondary"
        @click="goToResultPage"
      >
        我要查詢的對象未滿 1 歲
      </button>
      <button type="button" class="g-skip-btn" @click="skipToResultPage">
        我想直接看最新資訊
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: undefined,
    }
  },
  computed: {
    formatAge() {
      return parseInt(this.age)
    },
    shouldShowNextBtn() {
      return this.formatAge !== 0 && !isNaN(this.formatAge)
    },
  },
  methods: {
    goToNextPage() {
      this.$emit('finish-age', this.formatAge)
    },
    goToResultPage() {
      this.$emit('under-one-year')
    },
    skipToResultPage() {
      this.$emit('skip-to-result')
    },
  },
}
</script>

<style lang="scss" scoped>
.input-age {
  max-width: 320px;
  margin: 0 auto;
  &__input {
    display: flex;
    flex-direction: column;
    margin: 0 0 48px;
    label {
      font-size: 18px;
      line-height: 2;
      color: #000928;
      margin: 0 0 4px;
    }
    input {
      font-size: 18px;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      padding: 12px 16px;
      &:focus {
        outline: none;
        border: 1px solid #04295e;
      }
    }
  }
  &__btns {
    width: 100%;
    text-align: center;
    &--primary {
      margin: 0 auto 12px;
    }
    &--secondary {
      margin: 0 auto 24px;
    }
  }
}
</style>
