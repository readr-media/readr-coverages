<template>
  <section class="content">
    <div v-if="shouldShowTimeline" class="content__test">
      <button type="button" @click="handleTest2">豬瘟</button>
      <button type="button" @click="handleTest1">發電</button>
    </div>

    <Test2
      v-if="shouldShowTest2"
      class="content__video"
      @close-video="handleCloseVideo2"
    />
    <Test1
      v-if="shouldShowTest1"
      class="content__video"
      @close-video="handleCloseVideo1"
    />
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
      shouldShowTimeline: true,
      shouldShowTest1: false,
      shouldShowTest2: false,
      currentScrollHeight: 0,
    }
  },
  methods: {
    handleTest1() {
      this.shouldShowTimeline = false
      this.$emit('close-all')
      this.shouldShowTest1 = true
    },
    handleTest2() {
      this.shouldShowTimeline = false
      this.$emit('close-all')
      this.shouldShowTest2 = true
    },
    handleCloseVideo1() {
      this.shouldShowTimeline = true
      this.shouldShowTest1 = false
      this.$emit('open-all')
    },
    handleCloseVideo2() {
      this.shouldShowTimeline = true
      this.shouldShowTest2 = false
      this.$emit('open-all')
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: auto;
  &__test {
    height: 100vh;
    font-size: 40px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      display: block;
      margin: 0 40px;
    }
  }
  &__video {
    width: 100%;
    min-height: 100vh;
  }
}
</style>
