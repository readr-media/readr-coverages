<template>
  <div class="Navbar">
    <readr-header
      @readrLogoLinkClick="gaClickHandler('back to home')"
      @shareFacebookLinkClick="gaClickHandler('share to fb')"
      @shareLineLinkClick="gaClickHandler('share to line')"
    />
    <div class="Navbar__anchor"></div>
  </div>
</template>

<script>
import gaMixin from '~/mixins/gaMixin'

export default {
  mixins: [gaMixin],
}
</script>

<style lang="scss" scoped>
.Navbar {
  position: relative;
  z-index: 1000;
  background: transparent;
  width: 100%;
}
</style>
