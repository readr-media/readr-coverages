<template>
  <div class="board-info">
    <a
      v-if="anchorId"
      v-smooth-scroll
      class="board-info__anchor"
      :href="`#${anchorId}`"
    >
      <span v-for="(infoItem, index) in info" :key="index">
        {{ infoItem }}
      </span>

      <div class="board-info__anchor_icon">
        <img :src="require('@/static/images/icons/anchor-icon.svg')" alt="" />
      </div>
    </a>
    <div v-else class="board-info__content">
      <span v-for="(infoItem, index) in info" :key="index" v-html="infoItem">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Array,
      isRequired: true,
      default: () => {
        return ['今日新增本土確診數']
      },
    },

    // another settings
    anchorId: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.board-info {
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

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    color: #000928;
  }
}
</style>
