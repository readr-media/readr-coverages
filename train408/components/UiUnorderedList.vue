<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-html="content.text" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  padding: 18px;
  list-style: none;
  li {
    position: relative;
    span {
      font-size: 18px;
      font-weight: 300;
      line-height: 36px;
      color: #e0e0e0;
      &::v-deep {
        a {
          text-decoration: underline;
          text-decoration-color: #e0e0e0;
          text-underline-offset: 4px;
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      left: -18px;
      top: 16px;
      display: inline-block;
      background-color: #e0e0e0;
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
  }
  li + li {
    margin: 8px 0 0;
  }
}
</style>
