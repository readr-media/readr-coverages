<template>
  <div class="result-board">
    <ResultBoardTitle
      :title="result.title"
      :firstInjectTime="result.firstInjectTime"
      :job="result.job"
      class="result-board__title"
    />
    <ResultBoardTip
      v-if="result.tip"
      :tip="result.tip"
      :tipLink="result.tipLink"
      class="result-board__tip"
    />
    <ResultBoardDesc
      v-if="shouldShowDesc"
      :brief="result.brief"
      :description="result.description"
      :listItems="result.listItems"
      class="result-board__desc"
    />
    <div class="result-board__list-wrapper">
      <ResultBoardList
        :brands="result.brands"
        :sources="result.sources"
        :readyTime="result.readyTime"
        :startTime="result.startTime"
        :endTime="result.endTime"
        :isExpired="result.isExpired"
        :isA1="isA1"
        class="result-board__list-wrapper__list"
        :class="{ 'result-board__list-wrapper__list-flex': isA1 }"
      />
      <ResultBoardInjection
        :secondInjectTime="result.secondInjectTime"
        :howTo="result.howTo"
        :howToLink="result.howToLink"
        :timeStamp="result.timeStamp"
        :isA2="isA2"
        :isA7="isA7"
        class="result-board__list-wrapper__injection"
      />
    </div>
    <UiTimeStamp v-if="shouldShowTimeStamp" :timeStamp="result.timeStamp" />
  </div>
</template>

<script>
import ResultBoardTitle from '~/components/ResultBoardTitle.vue'
import ResultBoardTip from '~/components/ResultBoardTip.vue'
import ResultBoardDesc from '~/components/ResultBoardDesc.vue'
import ResultBoardList from '~/components/ResultBoardList.vue'
import ResultBoardInjection from '~/components/ResultBoardInjection.vue'
import UiTimeStamp from '~/components/UiTimeStamp.vue'

export default {
  components: {
    ResultBoardTitle,
    ResultBoardTip,
    ResultBoardDesc,
    ResultBoardList,
    ResultBoardInjection,
    UiTimeStamp,
  },
  props: {
    result: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    isA1() {
      return this.result.type === 'A1'
    },
    isA2() {
      return this.result.type === 'A2'
    },
    isA7() {
      return this.result.type === 'A7'
    },
    shouldShowDesc() {
      return this.result.brief || this.result.description || this.listItems
    },
    shouldShowTimeStamp() {
      return (
        this.result.type !== 'A2' &&
        this.result.type !== 'A5' &&
        this.result.type !== 'A7'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.result-board {
  border-bottom: 2px solid #000928;
  padding: 20px 20px 24px;
  @include media-breakpoint-up(md) {
    padding: 32px 40px;
  }
  &__title {
    margin: 0 0 24px;
  }
  &__tip {
    margin: 0 0 32px;
  }
  &__desc {
    margin: 0 0 4px;
  }
  &__list-wrapper {
    @include media-breakpoint-up(md) {
      display: flex;
    }
    &__list {
      margin: 0 0 12px;
      @include media-breakpoint-up(md) {
        min-width: 260px;
        max-width: 260px;
        margin: 0 40px 0 0;
      }
    }
    &__list-flex {
      @include media-breakpoint-up(md) {
        display: flex;
        justify-content: space-between;
        min-width: 100%;
        max-width: 100%;
        margin: 0;
      }
    }
    &__injection {
      @include media-breakpoint-up(md) {
        padding: 12px 0 0;
      }
    }
  }
}
</style>
