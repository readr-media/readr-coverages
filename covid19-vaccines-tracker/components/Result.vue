<template>
  <div class="result">
    <div class="result__info">
      <ResultBoard />
      <EmailBoard />
      <div class="result__info-btn">
        <button type="button" class="g-skip-btn" @click="handleSeachAgain">
          重新查詢
        </button>
      </div>
    </div>
    <div class="result__faq">
      <h2>你可能還想知道</h2>
      <ul>
        <li
          v-for="item in mockList"
          :key="item.title"
          class="result__faq__toggle-card"
        >
          <UiToggleCard
            :title="item.title"
            :content="item.content"
            :graphUrl="item.url"
          />
        </li>
      </ul>
    </div>
    <div class="result__morefaq">
      <h2>所有問答</h2>
      <ul>
        <li
          v-for="category in mockList2"
          :key="category.name"
          class="result__morefaq__toggle-category"
        >
          <UiToggleCategory :name="category.name" :items="category.items" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ResultBoard from '~/components/ResultBoard.vue'
import EmailBoard from '~/components/EmailBoard.vue'
import UiToggleCard from '~/components/UiToggleCard.vue'
import UiToggleCategory from '~/components/UiToggleCategory.vue'

export default {
  components: {
    ResultBoard,
    EmailBoard,
    UiToggleCard,
    UiToggleCategory,
  },
  data() {
    return {
      mockList: [
        {
          title: '勞工前往接種COVID-19疫苗，以及接種後擔心，可否請疫苗接種假？',
          content:
            '指揮中心建議，接種第 2 劑AZ疫苗的時間最好是間隔 8 至 12 周，如果是 3 月 22 日施打第一劑，12 周後的時間點會落在 6 月 13 日。不過台灣感染症醫學會名譽理事長黃立民指出，國外數據顯示，間隔12到16周打第二劑，其實和間隔10到12周的效果差不多，但因為國外幾乎沒有，建議最晚就是間隔 16 周。因此，在 7 月 11 日前打第二劑都還行。',
          url: '',
        },
        {
          title: '接種疫苗需要帶什麼證件？',
          content:
            '指揮中心建議，接種第 2 劑AZ疫苗的時間最好是間隔 8 至 12 周，如果是 3 月 22 日施打第一劑，12 周後的時間點會落在 6 月 13 日。不過台灣感染症醫學會名譽理事長黃立民指出，國外數據顯示，間隔12到16周打第二劑，其實和間隔10到12周的效果差不多，但因為國外幾乎沒有',
          url: 'xxxxxxx',
        },
        {
          title: '勞工前往接種COVID-19疫苗，可否請疫苗接種假？',
          content:
            '不過台灣感染症醫學會名譽理事長黃立民指出，國外數據顯示，間隔12到16周打第二劑，其實和間隔10到12周的效果差不多，但因為國外幾乎沒有，建議最晚就是間隔 16 周。因此，在 7 月 11 日前打第二劑都還行。',
          url: '',
        },
      ],
      mockList2: [
        {
          name: '即時資訊',
          items: [
            {
              title: '勞工前往接種COV後擔心有不適反應，可否請疫苗接種假？',
              content:
                '指揮中心建議，接種第 2 劑AZ疫苗的時間最好是間隔 8 至 12 周，如果是 3 月 22 日施打第一劑，12 周後的時間點會落在 6 月 13 日。不過台灣感染症醫學會名譽理事長黃立民指出，國外數據顯示，間隔12到16周打第二劑，其實和間隔10到12周的效果差不多，但因為國外幾乎沒有，建議最晚就是間隔 16 周。因此，在 7 月 11 日前打第二劑都還行。',
              url: '',
            },
            {
              title: '接種疫苗需要件？',
              content:
                '指揮中心建議，接種第 2 劑AZ疫苗的時間最好是間隔 8 至 12 周，如果是 3 月 22 日施打第一劑，12 周後的時間點會落在 6 月 13 日。不過台灣感染症醫學會名譽理事長黃立民指出，國外數據顯示，間隔12到16周打第二劑，其實和間隔10到12周的效果差不多，但因為國外幾乎沒有',
              url: 'xxxxxxx',
            },
            {
              title: '勞工前往接種COVID-19疫苗，可接種假？',
              content:
                '不過台灣感染症醫學會名譽理事長黃立民指出，國外數據顯示，間隔12到16周打第二劑，其實和間隔10到12周的效果差不多，但因為國外幾乎沒有，建議最晚就是間隔 16 周。因此，在 7 月 11 日前打第二劑都還行。',
              url: '',
            },
          ],
        },
        {
          name: '接種須知',
          items: [
            {
              title:
                '勞工前往接種COVI19疫苗，以及接種後擔心有不適反應，可否請疫種假？',
              content:
                '指揮中心建議，接種第 2 劑AZ疫苗的時間最好是間隔 8 至 12 周，如果是 3 月 22 日施打第一劑，12 周後的時間點會落在 6 月 13 日。不過台灣感染症醫學會名譽理事長黃立民指出，國外數據顯示，間隔12到16周打第二劑，其實和間隔10到12周的效果差不多，但因為國外幾乎沒有，建議最晚就是間隔 16 周。因此，在 7 月 11 日前打第二劑都還行。',
              url: '',
            },
            {
              title: '接種疫苗需要帶什麼證件？',
              content:
                '指揮中心建議，接種第 2 劑AZ疫苗的時間最間隔 8 至 12 周，如果是 3 月 22 日施打第一劑，12 周後的時間點會落在 6 月 13 日。不過台灣感染症醫學會名譽理事長黃立民指出，國外數據顯示，間隔12到16周打第二劑，其實和間隔10到12周的效果差不多，但因為國外幾乎沒有',
              url: 'xxxxxxx',
            },
            {
              title: '勞工前往接種COVID-19疫苗，可否苗接種假？',
              content:
                '不過台灣感染症醫學會名譽理事長黃立民指出，國外數據顯示，間隔12到16周打第二劑，其實和間隔10到12周的效果差不多，但因為國外幾乎沒有，建議最晚就是間隔 16 周。因此，在 7 月 11 日前打第二劑都還行。',
              url: '',
            },
          ],
        },
        {
          name: '疫苗安全',
          items: [
            {
              title:
                '勞接種COVID-19疫苗，以及接種後擔心有不適反應，可否請疫苗接種假？',
              content: '日施打第一劑，12 都還行。',
              url: 'yyy',
            },
            {
              title:
                '勞工前往接種COVID-19疫苗，以有不適反應，可否請疫苗接種假？',
              content: '日施打第一劑，12 都還行。',
              url: 'uuu',
            },
            {
              title:
                '勞工前往接種COVID-19疫苗，以及接種後擔心有不適反應，可否種假？',
              content: '日施打第一劑，12 都還行。',
              url: '',
            },
            {
              title: '勞工前往接種COVID-19疫苗，以及接種後擔心有不種假？',
              content: '日施打第一劑，12 都還行。',
              url: '',
            },
            {
              title: '勞工前往接種COVID-19疫苗，以及接種後擔？',
              content: '日施打第一劑，12 都還行。',
              url: '',
            },
            {
              title:
                '勞工前往接種COVID-19疫苗，以及接種後擔心有不適反應，可否請疫苗接種假',
              content: '日施打第一劑，12 都還行。',
              url: '',
            },
          ],
        },
      ],
    }
  },
  methods: {
    handleSeachAgain() {
      console.log('serach')
    },
  },
}
</script>

<style lang="scss" scoped>
.result {
  width: calc(100% + 24px);
  transform: translateX(-12px);
  margin: 8px 0 28px;
  min-height: calc(100vh - 224px - 36px);
  @include media-breakpoint-up(md) {
    margin: 60px 0 52px;
    min-height: calc(100vh - 240px - 112px);
  }
  @include media-breakpoint-up(lg) {
    margin: 60px 0 60px;
    min-height: calc(100vh - 152px - 120px);
  }
  &__info {
    background-color: #fff;
    border: 2px solid #000928;
    border-radius: 6px;
    max-width: 640px;
    margin: 0 auto 56px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 120px;
    }
    &-btn {
      margin: 24px 0 20px;
      text-align: center;
      @include media-breakpoint-up(md) {
        margin: 24px 0 32px;
      }
    }
  }
  &__faq {
    max-width: 600px;
    margin: 0 auto 56px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 120px;
    }
    h2 {
      margin: 0 0 12px 12px;
      @include media-breakpoint-up(md) {
        margin: 0 0 24px;
      }
    }
    &__toggle-card {
      margin: 0 0 8px;
      @include media-breakpoint-up(md) {
        margin: 0 0 16px;
      }
    }
  }
  &__morefaq {
    max-width: 600px;
    margin: 0 auto 96px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 108px;
    }
    h2 {
      margin: 0 0 12px 12px;
      @include media-breakpoint-up(md) {
        margin: 0 0 12px;
      }
    }
  }
}
</style>
