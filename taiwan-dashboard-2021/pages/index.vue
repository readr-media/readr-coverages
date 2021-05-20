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
    <CircleChart />
    <FlashNews :flashNewsList="flashNewsList" />
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
import CircleChart from '~/components/Water/CircleChart.vue'
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
    CircleChart,
    Credit,
    Footer,
  },
  data() {
    return {
      flashNewsJson:
        '[{"category":"疫情","update_time":"2021/5/18 下午 2:30:00","title":"新增 240 COVID-19 本土案例，2 病例死亡，全國停課至 5 月 28 日","content":"今日新增 245 例 COVID-19 病例，其中 240 例是本土，群聚關聯不明有 51 例；5 例是境外移入。本土案例中，有 2 例死亡，臺灣至今累計 14 例死亡個案。<br>另為了降低群聚風險，教育部表示將於明天起（5 月 19 日）全臺停課至 5 月 28 日，改為線上教學。包括各級學校、公私立幼兒園、兒童課後照顧中心、補習班等各類教育機構。死亡個案分別為案 1522 與案 2095。案 1522 為 60 多歲女性，在萬華工作，5 月 10 日出現發燒，5 月 14 日就醫採檢，於 5 月 16 日確診，個案 17 日倒臥家中，同日送醫急救無效不幸死亡。<br>案 2095 為 80 多歲男性住院病人，有慢性病史，於 5 月 16 日進行接觸者檢驗檢出陽性。5 月 17 日因病情惡化，經急救後仍不幸死亡。<br>新增本土案例中，發病日最早為 5 月 5 日，居住縣市分別為新北市 106 例（最多為中和區 33 例），接續是臺北市 102 例、桃園市 12 例、彰化縣 10 例、基隆市及高雄市各 3 例、新竹縣 2 例、新竹市及雲林縣各 1 例。<br>本土案例群聚關係，臺北茶藝館 88 例、萬華區活動史 67 例、某社團相關群聚 2 例、進香團 2 例、宜蘭遊藝場 1 例。群聚關聯不明 51 例、疫調中 29 例。<br>陳時中也提醒，目前縣市病例會因居住地、染疫地而有些微差異，目前病例縣市是以居住地為主。<br>今日新增之 5 例境外移入分別來自印尼、吉爾吉斯、菲律賓，皆持有 3 日內陰性證明。","author":"李又如","publish":"y"},{"category":"水","update_time":"2021/5/17 下午 2:11:00","title":"今日新增 333 例本土案例，5 月 19 日起禁止非本國人入境","content":"今日共新增 335  例確診案例，其中 333 例是本土，2 例為境外移入。<br>另自 5 月 19 日至 6 月 18 日止，暫停非本國人或未持有臺灣居留證者入境，並暫停旅客在台灣轉機。若有人道考量者以專案處理。<br>333 例本土案例中，發病日介於 5 月 5 日至 16 日，群聚關聯不明者有 40 例。其餘群聚關聯案為：臺北茶藝館 155 例、萬華活動史相關 86 例、南部進香團 6 例、某社團群聚相關 5 例、宜蘭遊藝場群聚相關 3 例，疫調中有 38 例。<br>縣市分佈則為臺北市 158 例最多（集中在萬華區 89 例），接著依序是新北市 148 例（集中在板橋 41 例最多）、桃園市10例、基隆市 6 例、彰化縣 5 例、臺中市及宜蘭縣各 2 例、新竹縣及苗栗縣各 1 例。<br>境外移入兩例分別為來自菲律賓的男子，以及從菲律賓、海地入境的本國籍女子。兩人皆持有搭機前 3 日內檢驗陰性報告。","author":"李又如","publish":"y"},{"category":"電","update_time":"2021/5/17 上午 10:48:00","title":"明起兩週，雙北除了大學以外全面停課，採遠距教學","content":"臺北市、新北市在方才（10:30）分別舉行記者會宣布，明天開始兩週內，市內高中以下（含高中）全面停課，採遠距教學。<br>停課停班範圍包括公私立高中職、國中小、幼兒園、補習班和課後照顧中心；但台北市有特別提到「托嬰中心」也停止，新北市並沒有提及此範圍。<br><br><b>家長可以請假嗎？</b><br><b>家庭照顧假</b>：家中若有 12 歲以下或是身心障礙的孩子，雇主依法須給予家庭照顧假。不給薪，也不紀錄考績。<br><b>防疫照顧假</b>：家中若有 12 歲以下的孩子，家長有需求可申請。雙北市政府皆呼籲雇主應給假。同樣不給薪，也不紀錄考績。<br><br>臺北市長柯文哲表示，會提前在指揮中心公佈前就開記者會，是因快篩結果與目前掌握到地方的觀察，判斷疫情還在升高，為讓家長有機會準備，故提前宣布；新北市長侯友宜也提到昨日板橋區單天出現 32 例本土確診，疫情嚴峻。","author":"李又如","publish":"y"},{"category":"疫情","update_time":"2021/5/17 下午 2:11:00","title":"今日新增 333 例本土案例，5 月 19 日起禁止非本國人入境","content":"今日共新增 335  例確診案例，其中 333 例是本土，2 例為境外移入。<br>另自 5 月 19 日至 6 月 18 日止，暫停非本國人或未持有臺灣居留證者入境，並暫停旅客在台灣轉機。若有人道考量者以專案處理。<br>333 例本土案例中，發病日介於 5 月 5 日至 16 日，群聚關聯不明者有 40 例。其餘群聚關聯案為：臺北茶藝館 155 例、萬華活動史相關 86 例、南部進香團 6 例、某社團群聚相關 5 例、宜蘭遊藝場群聚相關 3 例，疫調中有 38 例。<br>縣市分佈則為臺北市 158 例最多（集中在萬華區 89 例），接著依序是新北市 148 例（集中在板橋 41 例最多）、桃園市10例、基隆市 6 例、彰化縣 5 例、臺中市及宜蘭縣各 2 例、新竹縣及苗栗縣各 1 例。<br>境外移入兩例分別為來自菲律賓的男子，以及從菲律賓、海地入境的本國籍女子。兩人皆持有搭機前 3 日內檢驗陰性報告。","author":"李又如","publish":"y"},{"category":"疫情","update_time":"2021/5/17 上午 10:48:00","title":"明起兩週，雙北除了大學以外全面停課，採遠距教學","content":"臺北市、新北市在方才（10:30）分別舉行記者會宣布，明天開始兩週內，市內高中以下（含高中）全面停課，採遠距教學。<br>停課停班範圍包括公私立高中職、國中小、幼兒園、補習班和課後照顧中心；但台北市有特別提到「托嬰中心」也停止，新北市並沒有提及此範圍。<br><br><b>家長可以請假嗎？</b><br><b>家庭照顧假</b>：家中若有 12 歲以下或是身心障礙的孩子，雇主依法須給予家庭照顧假。不給薪，也不紀錄考績。<br><b>防疫照顧假</b>：家中若有 12 歲以下的孩子，家長有需求可申請。雙北市政府皆呼籲雇主應給假。同樣不給薪，也不紀錄考績。<br><br>臺北市長柯文哲表示，會提前在指揮中心公佈前就開記者會，是因快篩結果與目前掌握到地方的觀察，判斷疫情還在升高，為讓家長有機會準備，故提前宣布；新北市長侯友宜也提到昨日板橋區單天出現 32 例本土確診，疫情嚴峻。","author":"李又如","publish":"y"}]',
    }
  },
  computed: {
    flashNewsList() {
      return JSON.parse(this.flashNewsJson)
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

    // desktop range
    @include media-breakpoint-up(xl) {
      padding: 0 40px;
    }
  }
}
</style>
