<template>
  <div class="board-title" :style="{ color: color }">
    <template v-if="boardType === 'number'">
      <h1 v-if="isNeededPlus" class="board-title__plus eng">+</h1>
      <h1 class="board-title__count eng">
        {{ formatedCount }}
      </h1>
      <h4>{{ unit }}</h4>
    </template>

    <template v-else-if="boardType === 'multi-number'">
      <h1 v-if="isNeededPlus" class="board-title__plus eng">+</h1>
      <h1 class="board-title__count eng">
        {{ leftCount }}<span>/</span>{{ rightCount }}
      </h1>
      <h4>{{ unit }}</h4>
    </template>

    <template v-else-if="boardType === 'status'">
      <h2 class="board-title__status chn">
        {{ status }}
      </h2>
    </template>

    <template v-else>
      <div class="board-title__region">
        <h3 v-if="regions" class="board-title__region_status">
          {{ regionStatus }}
        </h3>
        <h2 v-else class="board-title__region_status">
          {{ regionStatus }}
        </h2>
        <h5 class="board-title__region_regions">
          {{ regions }}
        </h5>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    boardType: {
      type: String,
      isRequired: true,
      default: 'number', // number status,region-status
    },
    // number
    count: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: '例',
    },
    isNeededPlus: {
      type: Boolean,
      default: false,
    },
    isNeededPoint: {
      type: Boolean,
      default: false,
    },
    // multi-number
    leftCount: {
      type: Number,
      default: 0,
    },
    rightCount: {
      type: Number,
      default: 0,
    },
    // status
    status: {
      type: String,
      default: '供電吃緊',
    },
    // region-status
    regionStatus: {
      type: String,
      default: '分區或定點供水',
    },
    regions: {
      type: String,
      default: '苗栗縣，台中市及彰化縣北部',
    },
    color: {
      type: String,
      default: '#E73E33',
    },
  },

  computed: {
    formatedCount() {
      if (this.isNeededPoint) {
        return this.count.toFixed(1)
      } else {
        return this.count
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.board-title {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 9px;

  &__count {
    margin-right: 8px;
  }

  &__plus {
    transform: translateY(-5px);
  }

  h1.eng {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    // tablet range
    @include media-breakpoint-up(md) {
      font-size: 60px;
      line-height: 70px;
    }
    span {
      font-size: 36px;
      line-height: 42.19px;
    }
  }
  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    // tablet range
    @include media-breakpoint-up(md) {
      font-size: 32px;
      line-height: 47px;
    }
  }
}
</style>
