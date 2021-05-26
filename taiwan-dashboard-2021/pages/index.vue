<template>
  <div class="homepage">
    <Navbar />
    <Hero />
    <div class="homepage__diagram_wrapper">
      <DiagramMain
        :currentCovidCount="currentCovidCount"
        :currentCovidDeathCount="currentCovidDeathCount"
        :currentElectricLoading="currentElectricLoading"
        :currentElectricStatusColor="currentElectricStatusColor"
        :currentWaterStatus="currentWaterStatus"
        :currentWaterStatusColor="currentWaterStatusColor"
        :updateTime="convertUpdateTime(updateTime)"
        :isLoadingData="isLoadingData"
      />
      <DiagramCovid19
        :covid="covid"
        :updateTime="convertUpdateTime(covid.update_time)"
        :isLoadingData="isLoadingData"
      />
      <DiagramElectric
        :power="power"
        :currentElectricLoading="currentElectricLoading"
        :currentElectricStatusColor="currentElectricStatusColor"
        :updateTime="convertUpdateTime(power.update_time)"
        :isLoadingData="isLoadingData"
      />
      <DiagramWater
        :water="water"
        :updateTime="convertUpdateTime(water.updated, true)"
        :isLoadingData="isLoadingData"
      />
      <!-- <DiagramCovid19
        :covid="covid"
        :updateTime="convertUpdateTime(covid.update_time)"
      />
      <DiagramElectric :power="power" />
      <DiagramWater /> -->
    </div>

    <FlashNews :flashNewsList="news" />
    <Donate />
    <Credit />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import { amPmHandler } from '~/utils/time-handler'
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import DiagramMain from '~/components/DiagramMain.vue'
import DiagramCovid19 from '~/components/DiagramCovid19.vue'
import DiagramElectric from '~/components/DiagramElectric.vue'
import DiagramWater from '~/components/DiagramWater.vue'
import FlashNews from '~/components/FlashNews.vue'
import Donate from '~/components/Donate.vue'
import Credit from '~/components/Credit.vue'
import Footer from '~/components/Footer.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    Navbar,
    Hero,
    DiagramMain,
    DiagramCovid19,
    DiagramElectric,
    DiagramWater,
    FlashNews,
    Donate,
    Credit,
    Footer,
  },
  mixins: [gaMixin],
  data() {
    return {
      isLoadingData: true,
      news: [],
      covid: {},
      water: {},
      power: {},
      tempNews: {},
      updateTime: '',
    }
  },
  computed: {
    currentCovidCount() {
      return this.covid?.today
    },
    currentCovidDeathCount() {
      return this.covid?.death_today
    },
    currentCovidDeathCount() {
      return this.covid?.death_today || 0
    },
    todayData() {
      return this.power?.power_24h_today ?? []
    },
    yesterdayData() {
      return this.power?.power_24h_yesterday ?? []
    },
    currentElectricLoading() {
      const data = this.todayData.length ? this.todayData : this.yesterdayData
      return (
        data[data.length - 1]?.status['供電狀況']?.slice(0, 4) ?? '供電充裕'
      )
    },
    currentElectricStatusColor() {
      const status = this.currentElectricLoading
      const index =
        ['供電充裕', '供電吃緊', '供電警戒', '限電警戒'].indexOf(status) ?? 0
      const color = ['#24c7bd', '#f9c408', '#f97c08', '#e73e33']
      return color[index]
    },
    currentWaterStatus() {
      const warning = _.cloneDeep(this.water?.warning) || []
      const group = _.groupBy(warning, (city) => city.status)
      const status = ['分區供水或定點供水', '減壓供水', '減量供水', '水情提醒']
      let i = 0
      while (i < status.length) {
        if (group[status[i]]) {
          let regionStr = ''
          group[status[i]].forEach((item) => {
            if (regionStr) {
              regionStr = regionStr + '、' + item.location
            } else {
              regionStr = item.location
            }
          })
          const statusStr = i ? status[i] : '分區或定點供水'
          return {
            info: statusStr,
            region: regionStr,
          }
        }
        i++
      }
      return {
        info: '供水充沛',
        region: '',
      }
    },
    currentWaterStatusColor() {
      const status = this.currentWaterStatus.info
      const index =
        [
          '分區或定點供水',
          '減量供水',
          '減壓供水',
          '水情提醒',
          '供水充沛',
        ].indexOf(status) ?? 4
      const color = ['#e73e33', '#f97c08', '#f9c408', '#24c7bd', '#000928']
      return color[index]
    },
  },
  mounted() {
    axios
      .get('https://storage.googleapis.com/projects.readr.tw/dashboard.json')
      .then((res) => {
        // console.log(res.data)
        const { covid, news, power, water } = res.data
        this.covid = covid
        this.news = news
        this.power = power
        this.water = water
        this.updateTime = res.data.update_time

        setTimeout(() => {
          this.isLoadingData = false
        }, 5000)
      })
  },
  methods: {
    convertUpdateTime(updateTime, isFromWater) {
      let timeArray
      if (isFromWater) {
        timeArray = updateTime?.split('T')
      } else {
        timeArray = updateTime?.split(' ')
      }

      let date = timeArray?.[0]
      let time = timeArray?.[1]
      const AMPM = timeArray?.[2]

      // handle date format
      const dateDevideChar = date?.substring(4, 5)
      date = date?.split(dateDevideChar).join('.')

      // handle time format
      // remove +08:00
      time = time?.split('+')[0]

      if (AMPM) {
        time = amPmHandler(time, AMPM)
      }

      return `最後更新 ${date} ${time}`
    },
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  min-height: 100vh;
  background: #f6f6f5;

  &__diagram_wrapper {
    padding: 0 12px;

    // tablet range
    @include media-breakpoint-up(md) {
      padding: 0 40px;
    }
  }
}
</style>
