<template>
  <div class="homepage">
    <Navbar />
    <DiagramCovid19 />
    <DiagramElectric />
    <DiagramWater />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import DiagramCovid19 from '~/components/DiagramCovid19.vue'
import DiagramElectric from '~/components/DiagramElectric.vue'
import DiagramWater from '~/components/DiagramWater.vue'
export default {
  components: {
    Navbar,
    DiagramCovid19,
    DiagramElectric,
    DiagramWater,
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
  background: #f6f6f5;
  padding: 0 12px;

  // desktop range
  @include media-breakpoint-up(xl) {
    padding: 0 40px;
  }
}
</style>
