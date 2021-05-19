<template>
  <div class="homepage">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  font-size: 1rem;
  min-height: 100vh;
}
</style>
