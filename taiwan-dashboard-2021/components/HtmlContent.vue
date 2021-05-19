<template>
  <div class="html-content">
    <HtmlContentBlock
      v-for="(contentBlock, index) in content"
      :key="index"
      :contentBlock="contentBlock"
    />
  </div>
</template>

<script>
import HtmlContentBlock from '~/components/HtmlContentBlock.vue'
export default {
  components: {
    HtmlContentBlock,
  },
  props: {
    content: {
      type: Array,
      isRequired: true,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.html-content {
  background: transparent;
}
</style>
