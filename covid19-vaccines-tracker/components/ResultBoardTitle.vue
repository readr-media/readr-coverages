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
    occupation: {
      type: String,
      default: '',
    },
  },
  computed: {
    titleFormat() {
      if (this.firstInjectTime) {
        return `<h2>你是在<span style="margin: 0 10px;color: #04295e;text-decoration: underline;">${this.firstInjectTime}</span>接種第一劑疫苗，${this.title}</h2>`
      }
      if (this.occupation) {
        return `<h2>你的職業<span style="margin: 0 10px;color: #04295e;text-decoration: underline;">${this.occupation}</span>類型中，目前可以施打疫苗的身份為：</h2>`
      }
      return `<h2>${this.title}</h2>` ?? '<h2></h2>'
    },
  },
}
</script>
