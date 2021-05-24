<template>
  <div class="board">
    <BoardTitle
      :boardType="boardType"
      :count="count"
      :unit="unit"
      :isNeededPlus="isNeededPlus"
      :isNeededPoint="isNeededPoint"
      :status="status"
      :regionStatus="regionStatus"
      :regions="regions"
      :color="color"
    />

    <BoardInfo :info="info" :anchorId="anchorId" />
  </div>
</template>

<script>
import BoardTitle from '~/components/BoardTitle.vue'
import BoardInfo from '~/components/BoardInfo.vue'

export default {
  components: {
    BoardTitle,
    BoardInfo,
  },
  props: {
    boardType: {
      type: String,
      isRequired: true,
      default: 'number', // number status,region-status
    },
    info: {
      type: Array,
      isRequired: true,
      default: () => {
        return ['今日新增本土確診數']
      },
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
    // another settings
    anchorId: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: '#E73E33',
    },
  },
}
</script>

<style lang="scss" scoped>
.board {
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
  height: fit-content;

  &__anchor {
    display: flex;
    align-items: center;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid #000928;
    }

    span {
      display: inline-block;
    }

    &_icon {
      margin-left: 5px;
      display: inline-block;
      width: 15px;
      height: 14px;
      transform: translateY(1px);
      img {
        width: 100%;
        height: 100%;
        object-fit: fit;
        object-position: center;
        background: transparent;
      }
    }
  }
}
</style>
