<template>
  <div class="homepage">
    <Navbar />
    <div class="homepage__diagram_wrapper">
      <DiagramCovid19 />
      <DiagramElectric />
      <DiagramWater />
    </div>

    <TaiwanMap
      :countyFillColorConfig="[
        {
          name: '花蓮縣',
          color: '#123456',
          opacity: 0.3,
          hoverInfo: {
            title: '南投縣',
            description: '今日確診 1 例',
          },
        },
        {
          name: '台北市',
          color: 'red',
          opacity: 1,
          hoverInfo: {
            title: '範例標題',
            description: '範例敘述',
          },
        },
        {
          name: '澎湖縣',
          color: 'red',
          opacity: 1,
          hoverInfo: {
            title: '範例標題',
            description: '範例敘述',
          },
        },
      ]"
      style="height: 500px"
    />
    <FlashNews />
    <Credit />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import DiagramCovid19 from '~/components/DiagramCovid19.vue'
import DiagramElectric from '~/components/DiagramElectric.vue'
import DiagramWater from '~/components/DiagramWater.vue'
import FlashNews from '~/components/FlashNews.vue'
import TaiwanMap from '~/components/TaiwanMap/TaiwanMap.vue'
import Credit from '~/components/Credit.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    DiagramCovid19,
    DiagramElectric,
    DiagramWater,
    FlashNews,
    TaiwanMap,
    Credit,
    Footer,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  font-size: 1rem;
  min-height: 100vh;
  background: #f6f6f5;

  &__diagram_wrapper {
    padding: 0 12px;

    // desktop range
    @include media-breakpoint-up(xl) {
      padding: 0 40px;
    }
  }
}
</style>
