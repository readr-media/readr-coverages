<template>
  <div class="donate">
    <readr-donate-button
      class="readr-donate"
      @click="gaClickHandler('donate')"
    />
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
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  .readr-donate {
    &::v-deep {
      .sc-readr-donate-button {
        &::before {
          content: '';
          background-color: #fff;
        }
      }
    }
  }
}
</style>
