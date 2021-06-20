<template>
  <div class="input-other">
    <div class="input-other__county">
      <label for="county">1. 你居住的縣市？</label>
      <input id="county" v-model="county" type="text" placeholder="28" />
    </div>
    <div class="input-other__btns">
      <button
        type="button"
        :class="[shouldShowNextBtn ? 'g-primary-btn' : 'g-disabled-btn']"
        class="input-other__btns--primary"
      >
        送出
      </button>
      <button type="button" class="g-skip-btn">我想直接看最新資訊</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      county: '',
    }
  },
  computed: {
    shouldShowNextBtn() {
      return this.county !== ''
    },
  },
}
</script>

<style lang="scss" scoped>
.input-other {
  max-width: 320px;
  margin: 0 auto;
  &__county {
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
