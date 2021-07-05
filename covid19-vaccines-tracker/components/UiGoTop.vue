<template>
  <div class="go-top">
    <img src="~static/images/go-top-icon.png" alt="go top icon" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.go-top {
  position: fixed;
  right: 16px;
  bottom: 50px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14), 0 2px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>
