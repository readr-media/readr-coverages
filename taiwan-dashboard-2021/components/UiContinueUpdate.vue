<template>
  <div class="continue-update">
    <h5>已暫停更新</h5>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      isRequired: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.continue-update {
  color: #e73e33;
  display: flex;
  align-items: center;
  border: 2px solid #e73e33;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 16px;

  &__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e73e33;
    margin-right: 8px;
    animation-name: blink;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  h5 {
    font-weight: bold;
  }
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
