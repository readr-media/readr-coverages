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
        :questions="questions"
        @finish-other="handleFinishOther"
        @skip-to-result="handleSkipToResult"
      />
      <Result
        v-if="shouldShowResult"
        :result="result"
        :qa="qa"
        @search-again="handleSearchAgain"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import Navbar from '~/components/Navbar.vue'
import Cover from '~/components/Cover.vue'
import InputAge from '~/components/InputAge.vue'
import InputOther from '~/components/InputOther.vue'
import Result from '~/components/Result.vue'
import Footer from '~/components/Footer.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    Navbar,
    Cover,
    InputAge,
    InputOther,
    Result,
    Footer,
  },
  mixins: [gaMixin],
  data() {
    return {
      shouldShowCover: true,
      shouldShowInputAge: false,
      shouldShowInputOther: false,
      shouldShowResult: false,
      result: {},
      government: [],
      cities: [],
      vaccinesId: [],
      questions: {},
      qa: {},
      inputData: {
        age: 0,
        county: '',
        injection: {
          isInjection: false,
          injectionTime: '',
        },
        condition: [],
        occupation: {
          major: '',
          option1: '',
          option2: '',
        },
      },
    }
  },
  async mounted() {
    try {
      const govRes = await axios.get(
        'https://projects.readr.tw/vaccine_tracker_government.json'
      )
      const cityRes = await axios.get(
        'https://projects.readr.tw/vaccine_tracker_cities.json'
      )
      const idRes = await axios.get(
        'https://projects.readr.tw/vaccine_tracker_vaccine_id.json'
      )
      const qoRes = await axios.get(
        'https://projects.readr.tw/vaccine_tracker_question_options.json'
      )
      const qaRes = await axios.get(
        'https://projects.readr.tw/vaccine_tracker_questions_answers.json'
      )
      this.government = govRes?.data ?? []
      this.cities = cityRes?.data ?? []
      this.vaccinesId = idRes?.data ?? []
      this.questions = this.formatQuestions(qoRes?.data)
      this.qa = this.formatQA(qaRes?.data)
    } catch (err) {
      console.log(err)
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
      if (payload < 18) {
        // A4
        this.result = {
          title: '你的年紀還不適合接種疫苗。',
          brief:
            '幾歲可以打疫苗？如果我還沒到達可以打疫苗的年紀，該如何保護自己？',
          description:
            '臺灣疫苗存貨有限，中央疫情流行指揮中心會在最新疫苗到貨時公佈此批疫苗的優先施打對象。你可以透過下圖追蹤最新的情形，或訂閱通知，我們會在你可以施打疫苗時通知您。',
          type: 'A4',
        }
        this.hideInputAge()
        this.showResult()
      } else {
        this.inputData.age = payload
        this.hideInputAge()
        this.showInputOther()
      }
    },
    handleFinishOther(payload) {
      this.hideInputOther()
      this.inputData.county = payload.county
      this.inputData.condition = [...payload.condition]
      this.inputData.injection = payload.injection
      this.inputData.occupation = payload.occupation
      this.result = this.generateResult(this.inputData)
      console.log(this.result)
      this.showResult()
    },
    handleToResult() {
      this.hideInputAge()
    },
    handleSearchAgain() {
      this.inputData = {}
      this.hideResult()
      this.showInputAge()
    },
    generateResult(data) {
      if (data.injection.isInjection && data.injection.injectionTime) {
        const interval = 75
        // A7 && A5
        return interval >= 70
          ? this.handleA7(data)
          : {
              firstInjectTime: data.injection.injectionTime,
              title: '建議接種第二劑的時間是10至12週後，目前還沒到。',
              injectTime: '2021/10/10',
              type: 'A5',
            }
      }
    },
    handleA7(data) {
      const matchedItem = this.government.find(
        (item) => item.identity === '已完成第一劑疫苗者' && item.data !== ''
      )
      const vaccine = this.vaccinesId.find(
        (item) =>
          item.vaccines_id === matchedItem.vaccines_id &&
          item.status === '施打中'
      )
      return {
        firstInjectTime: data.injection.injectionTime,
        title:
          '目前已經到了建議接種第二劑的時間，你也已被納入政府列出的公費優先施打名單內。',
        brands: [vaccine.brand],
        sources: [vaccine.source],
        type: 'A7',
      }
    },
    formatQuestions(rawData) {
      return _.groupBy(rawData, 'question') ?? {}
    },
    formatQA(rawData) {
      const data = rawData.filter(
        (item) => item.category && item.answer && item.question
      )
      return _.groupBy(data, 'category') ?? {}
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
