<template>
  <div class="homepage">
    <Navbar />
    <Hero />
    <div class="homepage__diagram_wrapper">
      <DiagramMain
        :currentCovidCount="currentCovidCount"
        :currentElectricLoading="currentElectricLoading"
        :currentElectricStatusColor="currentElectricStatusColor"
        :currentWaterStatus="currentWaterStatus"
        :updateTime="convertUpdateTime(updateTime)"
      />
      <DiagramCovid19
        :covid="covid"
        :updateTime="convertUpdateTime(covid.update_time)"
      />
      <DiagramElectric
        :power="power"
        :currentElectricLoading="currentElectricLoading"
        :currentElectricStatusColor="currentElectricStatusColor"
        :updateTime="convertUpdateTime(power.update_time)"
      />
      <DiagramWater
        :water="water"
        :updateTime="convertUpdateTime(water.updated)"
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
      return this.covid?.today || 0
    },
    todayData() {
      return this.power?.power_24h_today ?? []
    },
    currentElectricLoading() {
      return (
        this.todayData[this.todayData.length - 1]?.status['供電狀況']?.slice(
          0,
          4
        ) ?? '供電充裕'
      )
    },
    currentElectricStatusColor() {
      const status = this.currentElectricLoading
      const index =
        ['供電充裕', '供電吃緊', '供電警戒', '限電警戒'].indexOf(status) ?? 2
      const color = ['#24c7bd', '#f9c408', '#f97c08', '#e73e33']
      return color[index]
    },
    currentWaterStatus() {
      const warning = _.cloneDeep(this.water?.warning) ?? []
      const group = _.groupBy(warning, (city) => city.status)
      const status = ['分區供水或定點供水', '減壓供水', '減量供水', '水情提醒']
      let i = 0
      while (i < status.length) {
        if (group[status[i + 1]]) {
          let regionStr = ''
          group[status[i + 1]].forEach((item) => {
            regionStr = regionStr + '、' + item.location
          })
          console.log(regionStr)
          return {
            info: status[i + 1],
            region: [regionStr],
          }
        }
        i++
      }
      return {
        info: '供水充沛',
        region: ['全國各縣市'],
      }
    },
  },
  mounted() {
    axios
      .get('https://storage.googleapis.com/projects.readr.tw/dashboard.json')
      .then((res) => {
        // console.log(res.data)
        const { covid, news, power, water } = res.data
        console.log(res.data)
        this.covid = covid
        this.news = news
        this.power = power
        this.water = water
        this.updateTime = res.data.update_time
      })
  },
  methods: {
    convertUpdateTime(updateTime) {
      const time = updateTime || '2021-05-20'
      const newTime = time.split('-').join('.')
      return `最後更新 ${newTime}`
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
