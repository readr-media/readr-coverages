<template>
  <div>
    <UiToggleCard :title="''" :content="''" :graphUrl="''" />
  </div>
</template>

<script>
import UiToggleCard from '~/components/UiToggleCard.vue'

export default {
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
    UiToggleCard,
  },
}
</script>
