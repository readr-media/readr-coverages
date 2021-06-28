<template>
  <!-- eslint-disable vue/no-v-html -->
  <div v-html="titleFormat" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    firstInjectTime: {
      type: String,
      default: '',
    },
    job: {
      type: String,
      default: '',
    },
  },
  computed: {
    titleFormat() {
      if (this.firstInjectTime) {
        return `<h2>你是在<span style="margin: 0 10px;color: #04295e;text-decoration: underline;">${this.firstInjectTime}</span>接種第一劑疫苗，${this.title}</h2>`
      }
      if (this.job) {
        return `<h2>你的職業<span style="margin: 0 10px;color: #04295e;text-decoration: underline;">${this.job}</span>類型中，目前可以施打疫苗的身份為：</h2>`
      }
      if (this.title) {
        return `<h2>${this.title}</h2>`
      }
      return '<h2>抱歉，這個頁面出了點狀況，請重新查詢。</h2>'
    },
  },
}
</script>
