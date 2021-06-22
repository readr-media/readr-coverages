<template>
  <div class="vt">
    <Navbar />
    <div class="vt__content">
      <Cover
        v-if="shouldShowCover"
        @get-start="handleGetStart"
        @skip-to-result="handleSkipToResult"
      />
      <InputAge
        v-if="shouldShowInputAge"
        @finish-age="handleFinishAge"
        @under-one-year="handleToResult"
        @skip-to-result="handleSkipToResult"
      />
      <InputOther
        v-if="shouldShowInputOther"
        @finish-other="handleFinishOther"
        @skip-to-result="handleSkipToResult"
      />
      <Result v-if="shouldShowResult" />
      <Credit v-if="shouldShowCredit" />
      <Donate v-if="shouldShowDonate" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Cover from '~/components/Cover.vue'
import InputAge from '~/components/InputAge.vue'
import InputOther from '~/components/InputOther.vue'
import Result from '~/components/Result.vue'
import Donate from '~/components/Donate.vue'
import Credit from '~/components/Credit.vue'
import Footer from '~/components/Footer.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    Navbar,
    Cover,
    InputAge,
    InputOther,
    Result,
    Donate,
    Credit,
    Footer,
  },
  mixins: [gaMixin],
  data() {
    return {
      shouldShowCover: true,
      shouldShowInputAge: false,
      shouldShowInputOther: false,
      shouldShowResult: false,
      shouldShowCredit: false,
      shouldShowDonate: false,
      inputData: {
        age: 0,
        county: '',
        injection: '',
        injectionTime: undefined,
        condition: [],
        occupation: {
          first: '',
        },
      },
    }
  },
  methods: {
    hideCover() {
      this.shouldShowCover = false
    },
    hideInputAge() {
      this.shouldShowInputAge = false
    },
    hideInputOther() {
      this.shouldShowInputOther = false
    },
    hideResult() {
      this.shouldShowResult = false
    },
    showCover() {
      this.shouldShowCover = true
    },
    showInputAge() {
      this.shouldShowInputAge = true
    },
    showInputOther() {
      this.shouldShowInputOther = true
    },
    showResult() {
      this.shouldShowResult = true
    },
    handleGetStart() {
      this.hideCover()
      this.showInputAge()
    },
    handleSkipToResult() {
      this.hideCover()
      this.hideInputAge()
      this.hideInputOther()
      this.showResult()
    },
    handleFinishAge(payload) {
      this.inputData.age = payload
      this.hideInputAge()
      this.showInputOther()
    },
    handleFinishOther(payload) {
      this.hideInputOther()
      this.inputData.county = payload.county
      this.inputData.condition = [...payload.condition]
      this.inputData.injection = payload.injection
      this.inputData.occupation.first = payload.occupation
      console.log(this.inputData)
      this.showResult()
    },
    handleToResult() {
      this.hideInputAge()
    },
  },
}
</script>

<style lang="scss" scoped>
.vt {
  min-height: 100vh;
  background: #f6f6f5;
  &__content {
    padding: 0 20px;
    margin: 24px 0 48px;
    min-height: calc(100vh - 224px - 72px);
    @include media-breakpoint-up(md) {
      margin: 60px 0 72px;
      min-height: calc(100vh - 240px - 132px);
    }
    @include media-breakpoint-up(lg) {
      min-height: calc(100vh - 152px - 132px);
    }
  }
}
</style>
