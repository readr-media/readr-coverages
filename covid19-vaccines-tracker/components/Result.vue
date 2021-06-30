<template>
  <div class="result">
    <div class="result__info">
      <ResultBoard v-if="shouldShowResultBoard" :result="result" />
      <RemainDoseBoard
        v-if="shouldShowDoze"
        :county="result.county"
        :dozeInfo="result.dozeInfo"
      />
      <EmailBoard v-if="shouldShowEmail" />
      <div class="result__info-btn">
        <button
          type="button"
          :class="[shouldShowEmail ? 'g-skip-btn' : 'g-primary-btn']"
          @click="handleSeachAgain"
        >
          重新查詢
        </button>
      </div>
    </div>
    <div class="result__faq">
      <h2>你可能還想知道</h2>
      <ul>
        <li
          v-for="(item, i) in alsoKnow"
          :key="item.question"
          class="result__faq__toggle-card"
        >
          <UiToggleCard
            :title="item.question"
            :content="item.answer"
            :isFirstItem="!i"
          />
        </li>
      </ul>
    </div>
    <div class="result__morefaq">
      <h2>所有問答</h2>
      <ul>
        <li
          v-for="(item, i) in qa"
          :key="item[0].category"
          class="result__morefaq__toggle-category"
        >
          <UiToggleCategory
            :name="item[0].category"
            :items="item"
            :isFirstItem="!i"
          />
        </li>
      </ul>
    </div>
    <Credit />
    <Donate />
  </div>
</template>

<script>
import ResultBoard from '~/components/ResultBoard.vue'
import RemainDoseBoard from '~/components/RemainDoseBoard.vue'
import EmailBoard from '~/components/EmailBoard.vue'
import UiToggleCard from '~/components/UiToggleCard.vue'
import UiToggleCategory from '~/components/UiToggleCategory.vue'
import Donate from '~/components/Donate.vue'
import Credit from '~/components/Credit.vue'

export default {
  components: {
    ResultBoard,
    RemainDoseBoard,
    EmailBoard,
    UiToggleCard,
    UiToggleCategory,
    Donate,
    Credit,
  },
  props: {
    result: {
      type: Object,
      required: true,
      default: () => {},
    },
    qa: {
      type: Object,
      required: true,
      default: () => {},
    },
    alsoKnow: {
      type: Array,
      required: true,
      default: () => [],
    },
    shouldShowResultBoard: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  computed: {
    shouldShowEmail() {
      return (
        this.result.type !== 'A4' &&
        this.result.type !== 'A6' &&
        this.result.type !== 'A7'
      )
    },
    shouldShowDoze() {
      return (
        this.result.type === 'A1' ||
        this.result.type === 'A2' ||
        this.result.type === 'A3' ||
        this.result.type === 'A6'
      )
    },
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    handleSeachAgain() {
      this.$emit('search-again')
    },
    test() {
      this.$emit('test')
    },
  },
}
</script>

<style lang="scss" scoped>
.result {
  width: calc(100% + 24px);
  transform: translateX(-12px);
  margin: 8px 0 28px;
  min-height: calc(100vh - 224px - 36px);
  @include media-breakpoint-up(md) {
    margin: 60px 0 52px;
    min-height: calc(100vh - 240px - 112px);
  }
  @include media-breakpoint-up(lg) {
    margin: 60px 0 60px;
    min-height: calc(100vh - 152px - 120px);
  }
  &__info {
    background-color: #fff;
    border: 2px solid #000928;
    border-radius: 6px;
    max-width: 640px;
    margin: 0 auto 56px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 120px;
    }
    &-btn {
      margin: 24px 0 20px;
      text-align: center;
      @include media-breakpoint-up(md) {
        margin: 24px 0 32px;
      }
    }
  }
  &__faq {
    max-width: 600px;
    margin: 0 auto 56px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 120px;
    }
    h2 {
      margin: 0 0 12px 12px;
      @include media-breakpoint-up(md) {
        margin: 0 0 24px;
      }
    }
    &__toggle-card {
      margin: 0 0 8px;
      @include media-breakpoint-up(md) {
        margin: 0 0 16px;
      }
    }
  }
  &__morefaq {
    max-width: 600px;
    margin: 0 auto 48px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 108px;
    }
    h2 {
      margin: 0 0 12px 12px;
      @include media-breakpoint-up(md) {
        margin: 0 0 12px;
      }
    }
  }
}
</style>
