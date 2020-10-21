<template>
    <div id="More">
        <SponsorButton :style="{ marginBottom: '69px' }" />
        <RelativeNews />
    </div>
</template>

<script>
import SponsorButton from '~/components/More/SponsorButton'
import RelativeNews from '~/components/More/RelativeNews'

export default {
    components: {
        SponsorButton,
        RelativeNews,
    },
}
</script>

<style lang="scss" scoped>
#More {
    position: relative;
    z-index: 1;
    background: white;
    width: 100%;
    padding: 61px 0 31px;
}
</style>
