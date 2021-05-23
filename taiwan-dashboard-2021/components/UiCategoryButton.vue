<template>
  <div
    class="category-button"
    :class="{ disable: !isToggled, active: isToggled }"
  >
    <div class="category-button__icon">
      <img :src="icon" alt="" />
    </div>
    <div class="category-button__title">{{ title }}</div>

    <div class="category-button__blocker" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      isRequired: true,
      default: '',
    },
    title: {
      type: String,
      isRequired: true,
      default: '',
    },
    isToggled: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.category-button {
  position: relative;
  background: #fff;
  border: 1px solid #000928;
  box-sizing: border-box;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 2px 2px -1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px 12px;
  user-select: none;
  outline: none;
  overflow: hidden;

  &__icon {
    width: 18px;
    height: 18px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__title {
    font-size: 18px;
    line-height: 27px;
    color: #000928;
  }

  &__blocker {
    position: absolute;
    border-top: 1px solid #000928;
    transform: rotate(384.5deg) translate(-100%, -100%);
    transition: all 0.1s ease-in;
    transform-origin: 0 0;
    width: 87px;
    top: 0;
    left: 0;
  }
  &.disable {
    .category-button__blocker {
      transform: rotate(384.5deg) translate(0, 0);
    }
  }

  &.active:hover {
    .category-button__blocker {
      transform: rotate(384.5deg) translate(0, 0);
    }
  }
  &.disable:hover {
    .category-button__blocker {
      transform: rotate(384.5deg) translate(0, 0);
    }
  }

  &:active {
    background: linear-gradient(
        0deg,
        rgba(0, 9, 40, 0.05),
        rgba(0, 9, 40, 0.05)
      ),
      #fff;
    border: 1px solid #000928;
    box-sizing: border-box;
    border-radius: 2px;
  }
}
</style>
