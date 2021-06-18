<template>
  <div class="footer">
    <div class="footer__anchor_point"></div>
    <readr-footer />
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import gaMixin from '~/mixins/gaMixin'

export default {
  mixins: [gaMixin],
  mounted() {
    const scrollerCredit = scrollama()
    scrollerCredit
      .setup({
        step: '.footer__anchor_point',
        offset: 1,
      })
      .onStepEnter((response) => {
        if (response.direction === 'up') return
        this.gaScrollHandler('footer')
      })

    window.addEventListener('resize', scrollerCredit.resize)
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background: transparent;
}
</style>
