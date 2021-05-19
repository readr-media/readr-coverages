<template>
  <div class="category-button">
    <div class="category-button__icon">
      <img :src="icon" alt="" />
    </div>
    <div class="category-button__title">{{ title }}</div>
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
  },
}
</script>

<style lang="scss" scoped>
.category-button {
  background: #fff;
  border: 1px solid #000928;
  box-sizing: border-box;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 2px 2px -1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px 12px;

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
}
</style>
