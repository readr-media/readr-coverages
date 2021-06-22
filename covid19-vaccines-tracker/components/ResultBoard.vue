<template>
  <div class="result-board">
    <ResultBoardTitle
      :title="mockData.title"
      :firstInjectTime="mockData.firstInjectTime"
      class="result-board__title"
    />
    <ResultBoardDesc
      :brief="mockData.brief"
      :description="mockData.description"
      :timeStamp="mockData.timeStamp"
      :graphUrl="mockData.graphUrl"
      :listItems="mockData.listItems"
      class="result-board__desc"
    />
    <div class="result-board__list-wrapper">
      <ResultBoardList
        :brands="mockData.brands"
        :sources="mockData.sources"
        :readyTime="mockData.readyTime"
        :startTime="mockData.startTime"
        class="result-board__list-wrapper__list"
      />
      <ResultBoardInjection
        :injectTime="mockData.injectTime"
        :timeStamp="mockData.timeStamp"
        :isA2="true"
        class="result-board__list-wrapper__injection"
      />
    </div>
  </div>
</template>

<script>
import ResultBoardTitle from '~/components/ResultBoardTitle.vue'
import ResultBoardDesc from '~/components/ResultBoardDesc.vue'
import ResultBoardList from '~/components/ResultBoardList.vue'
import ResultBoardInjection from '~/components/ResultBoardInjection.vue'

export default {
  components: {
    ResultBoardTitle,
    ResultBoardDesc,
    ResultBoardList,
    ResultBoardInjection,
  },
  data() {
    return {
      mockData: {
        title: '你在最新一批公費疫苗的施打對象名單內，但實際接種日期待公佈。',
        brief: '為什麼還沒輪到我？',
        description:
          '臺灣疫苗存貨有限，中央疫情流行指揮中心會在最新疫苗到貨時公佈此批疫苗的優先施打對象。你可以透過下圖追蹤最新的情形，或訂閱通知，我們會在你可以施打疫苗時通知您。',
        timeStamp: '2021/6/22 更新',
        firstInjectTime: '2021/6/22',
        graphUrl: 'xxx',
        listItems: [
          '具有執業登記的醫事人員',
          '醫療院所的非醫事人員',
          '集中檢疫所的非醫事人員',
          '直接照顧（含採檢）確診/疑似個人第一線工作人員',
          '非直接照顧（含採檢）確診/疑似個人第一線工作人員',
        ],
        brands: ['AstraZeneca(AZ)', 'Moderna(莫德納)'],
        sources: ['COVEX', '直接與廠商購買'],
        injectTime: ['2021 年 8 月初', '2021 年 8 月中旬'],
        readyTime: ['2021 / 05 / 19', '2021 / 05 / 28'],
        startTime: ['2021 / 05 / 28'],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.result-board {
  border-bottom: 2px solid #000928;
  padding: 20px 20px 24px;
  @include media-breakpoint-up(md) {
    padding: 32px 40px;
  }
  &__title {
    margin: 0 0 24px;
  }
  &__desc {
    margin: 0 0 4px;
  }
  &__list-wrapper {
    @include media-breakpoint-up(md) {
      display: flex;
    }
    &__list {
      margin: 0 0 12px;
      @include media-breakpoint-up(md) {
        min-width: 260px;
        max-width: 260px;
        margin: 0;
      }
    }
    &__injection {
      @include media-breakpoint-up(md) {
        margin: 0 0 0 40px;
        padding: 12px 0 0;
      }
    }
  }
}
</style>
