<template>
  <div class="homepage">
    <Navbar />
    <Hero />
    <div class="homepage__diagram_wrapper">
      <DiagramMain
        :currentCovidCount="currentCovidCount"
        :currentElectricLoading="currentElectricLoading"
        :currentWaterStatus="currentWaterStatus"
        :updateTime="convertUpdateTime(updateTime)"
      />
      <DiagramCovid19
        :covid="covid"
        :updateTime="convertUpdateTime(covid.update_time)"
      />
      <DiagramElectric
        :power="power"
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
    currentElectricLoading() {
      return '供電吃緊'
    },
    currentWaterStatus() {
      return {
        info: '分區或定點供水',
        region: ['苗栗縣、台中市及彰化縣北部'],
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
