<template>
  <div class="flash-news-card">
    <h3 class="flash-news-card__title">{{ title }}</h3>

    <div class="flash-news-card__info">
      <div class="flash-news-card__info_left">
        <div class="flash-news-card__publish_time">{{ updateTime }}</div>
        <div class="flash-news-card__author">記者/{{ author }}</div>
      </div>

      <div class="flash-news-card__category">{{ category }}</div>
    </div>

    <HtmlContent :content="content" />
  </div>
</template>

<script>
import HtmlContent from '~/components/HtmlContent.vue'

export default {
  components: { HtmlContent },
  props: {
    flashNews: {
      type: Object,
      isRequired: true,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return { isExpanded: false }
  },
  computed: {
    title() {
      return this.flashNews.title
    },
    updateTime() {
      return this.flashNews.update_time
    },
    author() {
      return this.flashNews.author
    },
    category() {
      return this.flashNews.category
    },
    content() {
      const content = this.flashNews.content.split('<br>')
      return content
    },
  },
}
</script>

<style lang="scss" scoped>
.flash-news-card {
  padding: 24px 16px;
  background: #fff;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;

  &__title {
    margin-bottom: 12px;
  }

  &__info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  &__publish_time {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: justify;
    color: #000928;
    opacity: 0.3;
  }

  &__author {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    color: #000928;
    opacity: 0.66;
  }

  &__category {
    background: #fff;
    opacity: 0.3;
    border: 1px solid #000928;
    box-sizing: border-box;
    border-radius: 2px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #000928;
    padding: 4px 12px;
  }
}
</style>
