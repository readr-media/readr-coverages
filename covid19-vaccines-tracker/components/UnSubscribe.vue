<template>
  <div class="un-subscribe">
    <p class="un-subscribe__label">
      輸入你的 Email，以取消訂閱 READr 寄送的疫苗接種提醒
    </p>
    <div class="un-subscribe__input-wrapper">
      <div class="un-subscribe__input-wrapper--group">
        <input
          v-model="unsubscribeInput"
          type="email"
          :placeholder="placeholder"
          :disabled="hasSubmitBtn"
        />
        <ErrHandler
          v-if="!hasSubmitBtn"
          :target="'email'"
          :currentInput="unsubscribeInput"
          class="err-handler"
          @has-err="handleHasErr"
        />
      </div>
      <button
        type="button"
        :class="[
          shouldShowBtn ? 'g-primary-btn' : 'g-disabled-btn',
          { 'has-submit': hasSubmitBtn },
        ]"
        @click="handleUnSubscribe"
      >
        {{ emailText }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ErrHandler from '~/components/ErrHandler.vue'

export default {
  components: {
    ErrHandler,
  },
  data() {
    return {
      emailText: '取消訂閱',
      unsubscribeInput: '',
      placeholder: 'readr@gmail.com',
      hasSubmitBtn: false,
      hasErr: true,
    }
  },
  computed: {
    shouldShowBtn() {
      return this.unsubscribeInput && !this.hasErr
    },
  },
  methods: {
    handleHasErr(payload) {
      this.hasErr = payload
    },
    handleUnSubscribe() {
      this.placeholder = this.emailInput
      this.emailText = '已取消訂閱'
      this.hasSubmitBtn = true
      const data = {
        action: 'unsubscribe',
        subscriber: this.unsubscribeInput,
      }
      axios.post(
        'https://asia-east1-mirrormedia-1470651750304.cloudfunctions.net/google-sheet/subscribe',
        data
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.un-subscribe {
  padding: 0 28px;
  margin: 48px 0 0;
  min-height: calc(100vh - 224px - 72px);
  @include media-breakpoint-up(md) {
    max-width: 560px;
    padding: 0;
    margin: 60px auto 0;
    min-height: calc(100vh - 240px - 132px);
  }
  @include media-breakpoint-up(lg) {
    min-height: calc(100vh - 152px - 132px);
  }
  &__label {
    font-size: 16px;
    line-height: 1.5;
    color: #000928;
    margin: 0 0 8px;
  }
  &__input-wrapper {
    @include media-breakpoint-up(md) {
      display: flex;
    }
    &--group {
      @include media-breakpoint-up(md) {
        min-width: 400px;
        max-width: 400px;
        margin: 0 8px 0 0;
      }
      input[type='email'] {
        width: 100%;
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
    button {
      margin: 12px 0 0;
      height: 52px;
      @include media-breakpoint-up(md) {
        margin: 0;
      }
    }
    .has-submit {
      width: 100%;
      max-width: 320px;
      height: 52px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 12px auto 0;
      background-color: #f4f5f6;
      color: #04295e;
      text-align: center;
      font-size: 18px;
      line-height: 1.5;
      border: 1px solid #04295e;
      border-radius: 6px;
      padding: 12px;
      outline: none;
      pointer-events: none;
      @include media-breakpoint-up(md) {
        margin: 0;
      }
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
