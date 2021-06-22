<template>
  <div class="email-board">
    <p>留下你的 Email，施打疫苗的時間到了就會收到提醒</p>
    <input v-model="emailInput" type="email" placeholder="readr@gmail.com" />
    <button
      type="button"
      :class="[shouldShowSubmitBtn ? 'g-primary-btn' : 'g-disabled-btn']"
      class="email-board__btn"
      @click="submitEmail"
    >
      施打時間到了提醒我
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailInput: '',
    }
  },
  computed: {
    shouldShowSubmitBtn() {
      return this.emailInput.includes('.com')
    },
  },
  methods: {
    submitEmail() {
      console.log(this.emailInput)
    },
  },
}
</script>

<style lang="scss" scoped>
.email-board {
  margin: 24px 0 0;
  padding: 0 20px;
  text-align: center;
  @include media-breakpoint-up(md) {
    margin: 32px 0 0;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
    margin: 0 0 8px;
  }
  input[type='email'] {
    width: 100%;
    font-size: 18px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 12px 16px;
    margin: 0 0 12px;
    &:focus {
      outline: none;
      border: 1px solid #04295e;
    }
  }
}
</style>
