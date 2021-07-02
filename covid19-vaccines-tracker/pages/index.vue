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
        :alsoKnow="alsoKnow"
        @search-again="handleSearchAgain"
        @submit-email="handleSubmitEmail"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import { generateTime } from '~/utils/time-handler'
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
      RawQa: [],
      cityInfo: [],
      alsoKnow: [],
      inputData: {
        age: 0,
        county: '',
        injection: {
          isInjection: false,
          injectionTime: '',
          injectionBrand: '',
        },
        identity: [],
        job: {
          major: '',
          option1: '',
          option2: '',
        },
        email: '',
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
      const cityInfoRes = await axios.get(
        'https://projects.readr.tw/vaccine_tracker_cities_infomation.json'
      )
      this.government = govRes?.data ?? []
      this.cities = cityRes?.data ?? []
      this.vaccinesList = idRes?.data ?? []
      this.RawQa = qaRes?.data ?? []
      this.questions = this.formatQuestions(qoRes?.data)
      this.qa = this.formatQA(qaRes?.data)
      this.cityInfo = cityInfoRes?.data ?? []
    } catch (err) {
      /* eslint-disable no-console */
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
      this.gaClickHandler('開始查詢')
      this.hideCover()
      this.showInputAge()
    },
    handleSkipToResult() {
      this.gaClickHandler('我想直接看最新資訊')
      this.hideCover()
      this.hideInputAge()
      this.hideInputOther()
      this.alsoKnow = this.getAlsoKnow(true, {}, {})
      this.shouldShowResultBoard = false
      this.showResult()
    },
    handleFinishAge(payload) {
      if (payload < 18) {
        this.result = this.handleA4()
        this.hideInputAge()
        this.alsoKnow = this.getAlsoKnow(true, {}, {})
        this.showResult()
      } else {
        this.inputData.age = payload
        this.hideInputAge()
        this.showInputOther()
      }
    },
    handleFinishOther(payload) {
      this.gaClickHandler('送出')
      this.hideInputOther()
      this.inputData.county = payload.county
      this.inputData.identity = [...payload.identity]
      this.inputData.injection = payload.injection
      this.inputData.job = payload.job
      this.result = this.generateResult(this.inputData)
      this.addDozeInfo()
      this.alsoKnow = this.getAlsoKnow(false, this.result, this.inputData)
      this.shouldShowResultBoard = true
      this.showResult()
    },
    handleUnderOneYear() {
      this.gaClickHandler('我要查詢的對象未滿一歲')
      this.hideInputAge()
      this.shouldShowResultBoard = true
      this.result = this.handleA4()
      this.alsoKnow = this.getAlsoKnow(true, this.result, this.inputData)
      this.showResult()
    },
    handleSearchAgain() {
      this.gaClickHandler('重新查詢')
      this.inputData = {}
      this.result = {}
      this.hideResult()
      this.showInputAge()
    },
    generateResult(data) {
      if (data.injection.isInjection) {
        return this.handleA5A7(data)
      }
      const matchedList = this.government.filter(
        (item) =>
          item.status !== '暫緩施打' &&
          item.first_vaccine === '' &&
          (item.city === '不限' || item.city === data.county) &&
          item.job === data.job.major &&
          (item.job2 === '' || item.job2 === data.job.option1) &&
          (item.job3 === '' || item.job3 === data.job.option2) &&
          (item.identity === '' || data.identity.includes(item.identity)) &&
          (item.age === '' || this.handleAgeCompare(item.age, data.age))
      )
      if (matchedList.length) {
        return this.handleA1A2(matchedList, data)
      }
      return this.handleA3A6(data)
    },
    handleA1A2(govList, data) {
      const matchedCityItems = this.cities
        .filter(
          (item) =>
            item.status !== '暫緩施打' &&
            item.first_vaccine === '' &&
            (item.city === '不限' || item.city === data.county) &&
            item.job === data.job.major &&
            (item.job2 === '' || item.job2 === data.job.option1) &&
            (item.job3 === '' || item.job3 === data.job.option2) &&
            (item.identity === '' || data.identity.includes(item.identity)) &&
            (item.age === '' || this.handleAgeCompare(item.age, data.age))
        )
        .map((item) => {
          const matchedItem = this.vaccinesList.find(
            (d) => d.vaccines_id === item.vaccines_id && d.status === '施打中'
          )
          let expired = false
          if (matchedItem && item.end_date) {
            const now = new Date().getTime()
            const inputDate = generateTime(item.end_date)
            const interval = now - inputDate
            if (interval > 0) {
              expired = true
            }
          }
          return matchedItem
            ? {
                brand: matchedItem.brand,
                source: matchedItem.source,
                secondInjectTime: matchedItem.time_for_the_second_vaccine,
                startTime: item.open_date,
                endTime: item.end_date,
                howTo: item.how_to,
                howToLink: item.how_to_link,
                tip: item.data,
                tipLink: item.data_link,
                stamp: item.update_time,
                order: item.order,
                type: item.type,
                isExpired: expired,
                job: item.job,
                job2: item.job2,
                job3: item.job3,
                identity: item.identity,
                age: item.age,
                city: item.city,
              }
            : {}
        })
        .filter((item) => Object.keys(item).length !== 0)
      if (matchedCityItems.length) {
        const filteredExpired = matchedCityItems.filter(
          (item) => item.isExpired !== true
        )
        const orderTargets = filteredExpired.length
          ? filteredExpired
          : matchedCityItems
        const filteredItem = _.orderBy(
          orderTargets,
          ['order', 'type'],
          ['asc', 'asc']
        )[0]
        const sameItems = orderTargets.filter(
          (item) =>
            item.brand !== filteredItem.brand &&
            item.job === filteredItem.job &&
            item.job2 === filteredItem.job2 &&
            item.job2 === filteredItem.job3 &&
            item.age === filteredItem.age &&
            item.identity === filteredItem.identity &&
            item.city === filteredItem.city
        )
        sameItems.push(filteredItem)
        if (filteredItem.isExpired) {
          const info = this.cityInfo.find((item) => item.cities === data.county)
          const contact = info ? info.information : ''
          const contactLink = info ? info.information_link : ''
          filteredItem.howTo = contact
          filteredItem.howToLink = contactLink
        }
        return {
          title: '你在最新一批公費疫苗的施打對象名單內，接種日期已經公佈。',
          brands: sameItems.map((item) => item.brand),
          sources: sameItems.map((item) => item.source),
          startTime: sameItems.map((item) => item.startTime),
          endTime: sameItems.map((item) => item.endTime),
          secondInjectTime: sameItems.map((item) => item.secondInjectTime),
          howTo: [filteredItem.howTo],
          howToLink: [filteredItem.howToLink],
          tip: filteredItem.tip,
          tipLink: filteredItem.tipLink,
          timeStamp: filteredItem.stamp,
          isExpired: filteredItem.isExpired,
          type: 'A2',
        }
      } else {
        let dataTip = ''
        let dataTipLink = ''
        let stamp = ''
        const vaccine = govList
          .map((item) => {
            const matchedItem = this.vaccinesList.find(
              (d) => d.vaccines_id === item.vaccines_id && d.status === '施打中'
            )
            if (matchedItem && item.data) {
              dataTip = item.data
              dataTipLink = item.data_link
            }
            if (matchedItem && item.update_time) {
              stamp = item.update_time
            }
            return matchedItem
              ? {
                  brands: matchedItem.brand,
                  sources: matchedItem.source,
                  arrival: generateTime(matchedItem.arrival_date),
                }
              : {}
          })
          .filter((item) => Object.keys(item).length !== 0)
        const groupedVaccine = _.groupBy(vaccine, 'brands')
        const sortedVaccine = []
        Object.keys(groupedVaccine).forEach((item) => {
          sortedVaccine.push(
            _.orderBy(groupedVaccine[item], ['arrival'], ['desc'])[0]
          )
        })
        return {
          title: '你在最新一批公費疫苗的施打對象名單內，但實際接種日期待公佈。',
          brands: sortedVaccine.map((item) => item.brands),
          sources: sortedVaccine.map((item) => item.sources),
          tip: dataTip,
          tipLink: dataTipLink,
          timeStamp: stamp,
          type: 'A1',
        }
      }
    },
    handleA3A6(data) {
      const jobMatched = this.government.find(
        (item) =>
          item.status !== '暫緩施打' &&
          item.job === data.job.major &&
          item.age === '' &&
          item.identity === ''
      )
      if (
        jobMatched &&
        (data.job.option1 === '我不確定' || data.job.option2 === '我不確定')
      ) {
        return this.handleA6(data)
      }
      return this.handleA3()
    },
    handleA3() {
      const stamp =
        this.government[this.government.length - 1].update_time ?? ''
      return {
        title: '你不在目前到貨疫苗的施打對象名單內，請繼續等待。',
        brief: '為什麼還沒輪到我？',
        description: [
          '臺灣疫苗存貨有限，中央疫情流行指揮中心會在最新疫苗到貨時公佈此批疫苗的優先施打對象。你可以透過下方「即時資訊」追蹤最新的情形，或訂閱通知，我們會在你可以施打疫苗時通知您。',
        ],
        timeStamp: stamp,
        type: 'A3',
      }
    },
    handleA4() {
      const stamp =
        this.government[this.government.length - 1].update_time ?? ''
      return {
        title: '你的年紀還不適合接種疫苗。',
        brief:
          '幾歲可以打疫苗？如果我還沒到達可以打疫苗的年紀，該如何保護自己？',
        description: [
          '目前國內開放施打的 AZ 疫苗和莫德納疫苗，適用年齡皆為 18 歲以上，指揮中心表示已盡量讓會接觸到 18 歲以下人口的職業與身份（例如教師、保母等）排進優先施打順位。',
          '18 歲以下的民眾如要預防 COVID-19，建議落實勤洗手、佩戴口罩、保持社交距離，並儘量避免出入人潮擁擠、空氣不流通的公共場所。',
        ],
        timeStamp: stamp,
        type: 'A4',
      }
    },
    handleA5A7(data) {
      const now = new Date().getTime()
      const [year, month, date] = data.injection.injectionTime?.split(' / ')
      const yearInt = parseInt(year)
      const monthInt = parseInt(month)
      const dateInt = parseInt(date)
      const inputDate = new Date(yearInt, monthInt - 1, dateInt).getTime()
      const interval = (now - inputDate) / (24 * 3600 * 1000)
      const stamp =
        this.government[this.government.length - 1].update_time ?? ''
      let dozeInterval = 70
      let wording = '10至12週'
      if (data.injection.injectionBrand.includes('Moderna')) {
        dozeInterval = 28
        wording = '4至6週'
      }
      return interval >= dozeInterval
        ? this.handleA7(data)
        : {
            firstInjectTime: data.injection.injectionTime,
            title: `建議接種第二劑的時間是${wording}後，目前還沒到。`,
            secondInjectTime: [
              this.formatDate(
                new Date(yearInt, monthInt, dateInt + dozeInterval + 1)
              ),
            ],
            timeStamp: stamp,
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
      const stamp = matchedList[matchedList.length - 1].update_time ?? ''
      return {
        job: data.job.major,
        brief: '可接種疫苗的身份',
        listItems: dataList,
        description: [
          '你可以向主管機關確認你的疫苗接種資格。若你的職業不在以上名單，代表你目前還不在疫苗施打的優先名單內，請繼續等待。',
        ],
        timeStamp: stamp,
        type: 'A6',
      }
    },
    handleA7(data) {
      const matchedCityItems = this.cities.filter(
        (item) =>
          item.city === data.county &&
          item.first_vaccine === '已接種第一劑疫苗' &&
          item.open_date !== ''
      )
      if (matchedCityItems.length) {
        const matchedVaccine = matchedCityItems
          .map((item) => {
            const matchedItem = this.vaccinesList.find(
              (d) =>
                d.vaccines_id === item.vaccines_id &&
                d.status === '施打中' &&
                d.brand === data.injection.injectionBrand
            )
            return matchedItem
              ? {
                  howTo: item.how_to,
                  howToLink: item.how_to_link,
                  stamp: item.update_time,
                  source: matchedItem.source,
                }
              : {}
          })
          .filter((item) => Object.keys(item).length !== 0)
        if (matchedVaccine.length) {
          return {
            firstInjectTime: data.injection.injectionTime,
            title:
              '目前已經到了建議接種第二劑的時間，你也已被納入政府列出的公費優先施打名單內。',
            brands: [data.injection.injectionBrand],
            sources: [matchedVaccine[0].source],
            howTo: [matchedVaccine[0].howTo],
            howToLink: [matchedVaccine[0].howToLink],
            timeStamp: matchedVaccine[0].stamp,
            type: 'A7',
          }
        } else {
          return this.handleA1ForHasFirstVaccine(data)
        }
      } else {
        return this.handleA1ForHasFirstVaccine(data)
      }
    },
    handleA1ForHasFirstVaccine(data) {
      const govList = this.government.filter(
        (item) => item.first_vaccine === '已接種第一劑疫苗' && item.date !== ''
      )
      let dataTip = ''
      let dataTipLink = ''
      let stamp = ''
      const vaccine = govList
        .map((item) => {
          const matchedItem = this.vaccinesList.find(
            (d) =>
              d.vaccines_id === item.vaccines_id &&
              d.status === '施打中' &&
              d.brand === data.injection.injectionBrand
          )
          if (matchedItem && item.data) {
            dataTip = item.data
            dataTipLink = item.data_link
          }
          if (matchedItem && item.update_time) {
            stamp = item.update_time
          }
          return matchedItem
            ? {
                brands: matchedItem.brand,
                sources: matchedItem.source,
                arrival: generateTime(matchedItem.arrival_date),
              }
            : {}
        })
        .filter((item) => Object.keys(item).length !== 0)
      if (vaccine.length) {
        const sortedVaccine = _.orderBy(vaccine, ['arrival'], ['desc'])
        return {
          title: '你在最新一批公費疫苗的施打對象名單內，但實際接種日期待公佈。',
          brands: [sortedVaccine[0].brands],
          sources: [sortedVaccine[0].sources],
          tip: dataTip,
          tipLink: dataTipLink,
          timeStamp: stamp,
          type: 'A1',
        }
      }
      return this.handleA3()
    },
    handleAgeCompare(str, num) {
      if (str && str.includes('&')) {
        const [str1, str2] = str.split('&')
        return (
          ((str1.includes('>') && num >= parseInt(str1.split('>')[1])) ||
            (str1.includes('<') && num <= parseInt(str1.split('<')[1]))) &&
          ((str2.includes('>') && num >= parseInt(str2.split('>')[1])) ||
            (str2.includes('<') && num <= parseInt(str2.split('<')[1])))
        )
      }
      return (
        (str.includes('>') && num >= parseInt(str.split('>')[1])) ||
        (str.includes('<') && num <= parseInt(str.split('<')[1]))
      )
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
    formatDate(date) {
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      return `${year} / ${month} / ${day}`
    },
    addDozeInfo() {
      this.result.county = this.inputData.county
      const item = this.cityInfo.find(
        (item) => item.cities === this.inputData.county
      )
      this.result.dozeInfo = item ? item.remaining_dose : '無資料'
      this.result.dozeInfoLink = item ? item.remaining_dose_link : '無資料'
    },
    getAlsoKnow(isSkip, result, data) {
      let matchedItems = []
      let allMatchedItems = []
      if (isSkip) {
        if (!data.age || data.age < 18) {
          matchedItems = this.RawQa.filter(
            (item) => item.age === '<18' && item.question && item.answer
          )
        } else {
          matchedItems = this.RawQa.filter(
            (item) => item.question && item.answer
          )
        }
      } else {
        matchedItems = this.RawQa.filter(
          (item) =>
            item.question &&
            item.answer &&
            (item.answers_option === result.type ||
              item.job === data.job.major ||
              data.identity.includes(item.identity))
        )
      }
      if (matchedItems.length < 3) {
        allMatchedItems = this.RawQa.filter(
          (item, i) => item.question && item.answer
        )
        matchedItems = matchedItems.concat(allMatchedItems)
      }
      return matchedItems.filter((item, i) => i < 3)
    },
    handleSubmitEmail(payload) {
      this.gaClickHandler('施打時間到了提醒我')
      this.inputData.email = payload
      const i = this.inputData
      const data = {
        action: 'subscribe',
        row: [
          i.email,
          i.age,
          i.county,
          i.injection.isInjection,
          i.injection.injectionTime,
          i.injection.injectionBrand,
          i.job.major,
          i.job.option1,
          i.job.option2,
          i.identity.join(),
          this.result.type,
        ],
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
