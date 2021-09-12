<template>
  <section class="content">
    <div class="content__test">
      <button type="button" @click="toggleTest2">豬瘟</button>
      <button type="button" @click="toggleTest1">發電</button>
    </div>

    <Test2 v-if="shouldShowTest2" class="content__video" />
    <Test1 v-if="shouldShowTest1" class="content__video" />
  </section>
</template>

<script>
import Test1 from '~/components/Test1.vue'
import Test2 from '~/components/Test2.vue'

export default {
  components: {
    Test1,
    Test2,
  },
  data() {
    return {
      shouldShowTest1: false,
      shouldShowTest2: false,
    }
  },
  methods: {
    toggleTest1() {
      this.shouldShowTest1 = !this.shouldShowTest1
    },
    toggleTest2() {
      this.shouldShowTest2 = !this.shouldShowTest2
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  &__test {
    min-height: 30vh;
    font-size: 70px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin: 0 40px;
    }
  }
  &__video {
    width: 100%;
    min-height: 100vh;
  }
}
</style>
