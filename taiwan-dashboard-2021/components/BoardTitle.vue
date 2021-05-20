<template>
  <div class="board-title" :style="{ color: color }">
    <template v-if="boardType === 'number'">
      <h1 class="board-title__plus eng">+</h1>
      <h1 class="board-title__count eng">
        {{ count }}
      </h1>
      <h4>{{ unit }}</h4>
    </template>

    <template v-else-if="boardType === 'status'">
      <h2 class="board-title__status eng">
        {{ status }}
      </h2>
    </template>

    <template v-else>
      <div class="board-title__region">
        <h3 class="board-title__region_status">
          {{ regionStatus }}
        </h3>
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
}
</style>
