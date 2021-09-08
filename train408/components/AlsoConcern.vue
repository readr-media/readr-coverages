<template>
  <div class="also-concern">
    <h2>如果你關心這個議題</h2>
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
          id: 'content1',
          text:
            '主動了解學校及系所聘雇專案與兼任教師的情形，尊重專業並肯定教師的付出',
        },
        {
          id: 'content2',
          text:
            '閱讀《兼任下流：流浪博士何處去？直擊高教崩壞現場，揭發兼任教師血汗、低薪、難以翻身的真相，從美國經驗反思大學院校公司化、教師商品化的巨大影響》相關出版書目',
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
.also-concern {
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
}
</style>
