<template>
  <div class="board-info">
    <a v-if="anchorId" class="board-info__anchor" :href="`#${anchorId}`">
      <span>
        {{ info }}
      </span>

      <div class="board-info__anchor_icon">
        <img :src="require('@/static/images/icons/anchor-icon.svg')" alt="" />
      </div>
    </a>
    <div v-else class="board-info__content">
      {{ info }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: String,
      isRequired: true,
      default: '今日新增本土確診數',
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
}
</style>
