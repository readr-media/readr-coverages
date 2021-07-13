<template>
  <button class="back-top" @click="handleBackTop">
    <img src="~static/images/go-top-icon.png" alt="go-to-top button" />
  </button>
</template>

<script>
export default {
  methods: {
    handleBackTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  right: 16px;
  bottom: 20px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14), 0 2px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 4px rgba(0, 0, 0, 0.2);
  &:active,
  &:focus,
  &:hover {
    outline: none;
  }
  &:active {
    background-color: #f4f5f6;
  }
  img {
    margin: 4px 0 0;
    width: 24px;
    height: 28px;
  }
}
</style>
