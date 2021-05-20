<template>
  <div class="diagram-toggle" :class="{ expanded: isToggled }">
    <span class="diagram-toggle__text">{{ showToggleText }}</span>

    <div class="diagram-toggle__icon">
      <img :src="require('@/static/images/icons/toggle-icon.svg')" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isToggled: {
      type: Boolean,
      isRequired: true,
      default: false,
    },
  },
  computed: {
    showToggleText() {
      return this.isToggled ? '收合全部' : '展開全部'
    },
  },
}
</script>

<style lang="scss" scoped>
.diagram-toggle {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0 0;
  border-top: 1px solid rgba(0, 9, 40, 0.1);
  user-select: none;
  width: calc(100% + (2 * 24px));
  margin-left: -24px;
  // tablet range
  @include media-breakpoint-up(md) {
    display: none;
  }

  &__icon {
    margin-left: 8px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    opacity: 50%;

    &:hover {
      opacity: 87%;
    }

    &:active {
      opacity: 1;
    }
  }

  &.expanded .diagram-toggle__icon {
    transform: rotate(180deg);
  }
}
</style>
