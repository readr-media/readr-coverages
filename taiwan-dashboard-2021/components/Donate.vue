<template>
  <div class="donate">
    <readr-donate-button @click="gaClickHandler('donate')" />
  </div>
</template>

<script>
import gaMixin from '~/mixins/gaMixin'
export default {
  mixins: [gaMixin],
}
</script>

<style lang="scss" scoped>
.donate {
  background: transparent;
  max-width: 395px;
  margin: auto;
  padding: 100px 0 31px;
}
</style>
