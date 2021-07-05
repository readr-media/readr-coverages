<template>
  <div class="input-age">
    <div class="input-age__input">
      <label for="age">1. 你的年齡？</label>
      <input
        id="age"
        v-model="age"
        type="number"
        placeholder="請輸入數字，如：28"
        @keypress="onlyNumber"
      />
      <ErrHandler :target="'age'" :currentInput="age" @has-err="handleHasErr" />
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
        直接看疫苗接種最新資訊
      </button>
    </div>
  </div>
</template>

<script>
import ErrHandler from '~/components/ErrHandler.vue'

export default {
  components: {
    ErrHandler,
  },
  data() {
    return {
      age: undefined,
      hasErr: true,
    }
  },
  computed: {
    formatAge() {
      return parseInt(this.age)
    },
    shouldShowNextBtn() {
      return this.formatAge && !this.hasErr
    },
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    onlyNumber(e) {
      const keyCode = e.keyCode ?? e.which
      if (keyCode < 48 || keyCode > 57) {
        e.preventDefault()
      }
    },
    goToNextPage() {
      this.$emit('finish-age', this.formatAge)
    },
    goToResultPage() {
      this.$emit('under-one-year')
    },
    skipToResultPage() {
      this.$emit('skip-to-result')
    },
    handleHasErr(payload) {
      this.hasErr = payload
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
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &:focus {
        outline: none;
        border: 1px solid #04295e;
      }
    }
    input[type='number'] {
      -moz-appearance: textfield;
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
