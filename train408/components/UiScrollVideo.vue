<template>
  <div class="video">
    <div :id="viedoId" />
  </div>
</template>

<script>
export default {
  props: {
    viedoId: {
      type: String,
      default: '',
    },
    script1: {
      type: String,
      default: '',
    },
    script2: {
      type: String,
      default: '',
    },
  },
  head() {
    const videoId = this.viedoId
    return {
      script: [
        {
          hid: videoId,
          async: true,
          innerHTML: this.script1,
        },
        {
          hid: `${videoId}-2`,
          id: `${videoId}-2`,
          type: 'text/javascript',
          async: true,
          crossOrigin: true,
          body: true,
          src: this.script2,
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        videoId: ['innerHTML'],
      },
    }
  },
}
</script>
