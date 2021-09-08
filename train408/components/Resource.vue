<template>
  <div class="resource">
    <h2>這個報導所用到的資料</h2>
    <p>
      兼任教師薪資計算公式由高教工會提供，利用教育部公開資料102-108年度大專院校課程表（來源：大學校院課程資源網）及大專院校教師專長彙整表（來源：教育部108學年度大專校院一覽表資訊網），經彙整後總計有3,942,121筆，再經過比較並排除無法辨識之資料，計算出每一位教師於各學年度的課堂數及鐘點數，並計算出預估薪資（不包含課程人數加給）。
    </p>
    <UiUnorderedList :contents="contents" />
  </div>
</template>

<script>
import UiUnorderedList from '~/components/UiUnorderedList.vue'

export default {
  components: {
    UiUnorderedList,
  },
  data() {
    return {
      contents: [
        {
          id: 'resource1',
          text:
            '<a href="https://www.readr.tw/" target="_blank">主動了解學校及系所聘雇專案與兼任教師的情形，尊重專業並肯定教師的付出</a>',
        },
        {
          id: 'content2',
          text:
            '<a href="https://www.readr.tw/" target="_blank">閱讀《兼任下流：流浪博士何處去？直擊高教崩壞現場，揭發兼任教師血汗、低薪、難以翻身的真相，從美國經驗反思大學院校公司化、教師商品化的巨大影響》相關出版書目</a>',
        },
        {
          id: 'content3',
          text:
            '關注<a href="https://www.readr.tw/" target="_blank">高等教育產業工會</a>、私校工會等維護教師權益組織的訊息',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.resource {
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
  h2 {
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    color: #e0e0e0;
    text-align: center;
    margin: 0 0 24px;
    @include media-breakpoint-up(md) {
      font-size: 32px;
      line-height: 44px;
      margin: 0 0 40px;
    }
  }
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 36px;
    color: #e0e0e0;
    margin: 0 0 32px;
  }
}
</style>
