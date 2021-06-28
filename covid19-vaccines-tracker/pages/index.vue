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
        @under-one-year="handleUnderOneYear"
        @skip-to-result="handleSkipToResult"
      />
      <InputOther
        v-if="shouldShowInputOther"
        :questions="questions"
        :vaccinesList="vaccinesList"
        @finish-other="handleFinishOther"
        @skip-to-result="handleSkipToResult"
      />
      <Result
        v-if="shouldShowResult"
        :result="result"
        :shouldShowResultBoard="shouldShowResultBoard"
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
      shouldShowResultBoard: true,
      result: {},
      government: [],
      cities: [],
      vaccinesList: [],
      questions: {},
      qa: {},
      inputData: {
        age: 0,
        county: '',
        injection: {
          isInjection: false,
          injectionTime: '',
        },
        identity: [],
        job: {
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
      this.vaccinesList = idRes?.data ?? []
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
      this.shouldShowResultBoard = false
      this.showResult()
    },
    handleFinishAge(payload) {
      if (payload < 18) {
        this.result = this.handleA4()
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
      this.inputData.identity = [...payload.identity]
      this.inputData.injection = payload.injection
      this.inputData.job = payload.job
      this.result = this.generateResult(this.inputData)
      this.shouldShowResultBoard = true
      this.showResult()
    },
    handleUnderOneYear() {
      this.hideInputAge()
      this.shouldShowResultBoard = true
      this.result = this.handleA4()
      this.showResult()
    },
    handleSearchAgain() {
      this.inputData = {}
      this.hideResult()
      this.showInputAge()
    },
    generateResult(data) {
      if (data.injection.isInjection && data.injection.injectionTime) {
        return this.handleA5A7(data)
      }
      if (data.job.option1 === '我不確定' || data.job.option2 === '我不確定') {
        return this.handleA6(data)
      }
      return this.handleA1A2A3(data)
    },
    handleA1A2A3(data) {
      const matchedList = this.government.filter(
        (item) =>
          item.status !== '暫緩施打' &&
          (item.city === '不限' || item.city === data.county) &&
          item.job === data.job.major &&
          (item.job2 === '' || item.job2 === data.job.option1) &&
          (item.job3 === '' || item.job3 === data.job.option2) &&
          (item.identity === '' ||
            data.identity.find((d) => d === item.identity)) &&
          (item.age === '' || this.handleAgeCompare(item.age, data.age))
      )
      if (matchedList.length) {
        return this.handleA1A2(matchedList, data)
      } else {
        return {
          title: '你不在目前到貨疫苗的施打對象名單內，請繼續等待。',
          brief: '為什麼還沒輪到我？',
          description:
            '臺灣疫苗存貨有限，中央疫情流行指揮中心會在最新疫苗到貨時公佈此批疫苗的優先施打對象。你可以透過下圖追蹤最新的情形，或訂閱通知，我們會在你可以施打疫苗時通知您。',
          type: 'A3',
        }
      }
    },
    handleA1A2(govList, data) {
      const cityList = this.cities.filter(
        (item) =>
          item.status !== '暫緩施打' &&
          item.city === data.county &&
          item.job === data.job.major &&
          (item.job2 === '' || item.job2 === data.job.option1) &&
          (item.job3 === '' || item.job3 === data.job.option2) &&
          (item.identity === '' ||
            data.identity.find((d) => d === item.identity)) &&
          (item.age === '' || this.handleAgeCompare(item.age, data.age))
      )
      console.log(cityList)
      if (cityList.length) {
        const groupedList = _.groupBy(cityList, 'vaccines_id')
        const newCityList = []
        const vaccine = Object.keys(groupedList).map((item) =>
          this.vaccinesList.find(
            (d) => d.vaccines_id === item && d.status === '施打中'
          )
        )
        vaccine.forEach((item) => {
          const newItem =
            groupedList[item.vaccines_id].find((d) => d.end_date === '') ??
            '2021/10/10'
          newCityList.push(newItem)
        })
        return {
          title: '你在最新一批公費疫苗的施打對象名單內，接種日期已經公佈。',
          brands: vaccine.map((item) => item.brand),
          sources: vaccine.map((item) => item.source),
          startTime: newCityList.map((item) => item.open_date),
          endTime: newCityList.map((item) => item.end_date),
          howTo: newCityList.map((item) => item.how_to),
          secondInjectTime: vaccine.map(
            (item) => item.time_for_the_second_vaccine
          ),
          type: 'A2',
        }
      } else {
        const vaccineIds = Object.keys(_.groupBy(govList, 'vaccines_id'))
        const vaccine = vaccineIds.map(
          (item) =>
            this.vaccinesList.find(
              (d) => d.vaccines_id === item && d.status === '施打中'
            ) ?? {}
        )
        return {
          title: '你在最新一批公費疫苗的施打對象名單內，但實際接種日期待公佈。',
          brands: vaccine.map((item) => item.brand),
          sources: vaccine.map((item) => item.source),
          secondInjectTime: vaccine.map(
            (item) => item.time_for_the_second_vaccine
          ),
          type: 'A1',
        }
      }
    },
    handleA4() {
      return {
        title: '你的年紀還不適合接種疫苗。',
        brief:
          '幾歲可以打疫苗？如果我還沒到達可以打疫苗的年紀，該如何保護自己？',
        description:
          '臺灣疫苗存貨有限，中央疫情流行指揮中心會在最新疫苗到貨時公佈此批疫苗的優先施打對象。你可以透過下圖追蹤最新的情形，或訂閱通知，我們會在你可以施打疫苗時通知您。',
        type: 'A4',
      }
    },
    handleA5A7(data) {
      const now = new Date().getTime()
      const [year, month, date] = data.injection.injectionTime?.split(' / ')
      const yearInt = parseInt(year)
      const monthInt = parseInt(month)
      const dateInt = parseInt(date)
      const inputDate = new Date(yearInt, monthInt, dateInt).getTime()
      const interval = Math.floor((now - inputDate) / (24 * 3600 * 1000))
      console.log(interval)
      return interval >= 70
        ? this.handleA7(data)
        : {
            firstInjectTime: data.injection.injectionTime,
            title: '建議接種第二劑的時間是10至12週後，目前還沒到。',
            injectTime: '2021/10/10',
            type: 'A5',
          }
    },
    handleA6(data) {
      const dataList = []
      const matchedList = this.government.filter(
        (item) =>
          item.job === data.job.major && item.date && item.status !== '暫緩施打'
      )
      matchedList.forEach((item) => {
        if (item.job2 && !dataList.includes(item.job2)) {
          dataList.push(item.job2)
        }
        if (item.job3 && !dataList.includes(item.job3)) {
          dataList.push(item.job3)
        }
      })
      return {
        job: data.job.major,
        brief: '可施打疫苗的身份',
        listItems: dataList,
        description:
          '你可以向主管機關確認你的疫苗接種資格。若你的職業不在以上名單，代表你目前還不在疫苗施打的優先名單內，請繼續等待。',
        type: 'A6',
      }
    },
    handleA7(data) {
      const matchedItem = this.government.find(
        (item) =>
          item.first_vaccine === '已接種第一劑疫苗者' && item.date !== ''
      )
      const vaccine = this.vaccinesList.find(
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
    handleAgeCompare(str, num) {
      if (str.includes('>') && num > parseInt(str.slice(1))) {
        return true
      }
      if (str.includes('<') && num < parseInt(str.slice(1))) {
        return true
      }
      return false
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
