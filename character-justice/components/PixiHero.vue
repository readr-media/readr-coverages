<template>
    <div class="PixiHero" ref="PixiHero"></div>
</template>

<script>
import Hero_mobile from '~/static/images/Hero_mobile.jpg'
import Hero_pad from '~/static/images/Hero_pad.jpg'
import Hero_web from '~/static/images/Hero_web.jpg'

import * as PIXI from 'pixi.js'
let type = 'WebGL'
if (!PIXI.utils.isWebGLSupported()) {
    type = 'canvas'
}

export default {
    mounted() {
        const { clientHeight, clientWidth } = this.$refs.PixiHero

        //Create a Pixi Application
        const app = new PIXI.Application({
            width: clientWidth,
            height: clientHeight,
            backgroundColor: 0x061639,
        })

        // put pixi app's canvas into specified DOM
        document.querySelector('.PixiHero').appendChild(app.view)

        const container = new PIXI.Container()
        app.stage.addChild(container)

        const loader = new PIXI.Loader()
        loader
            .add('fakeimg', 'https://i.imgur.com/j5QyG2t.png')
            .load((loader, resource) => {
                init(resource)
            })
        function init(item) {
            const sprite = new PIXI.Sprite(item.fakeimg.texture)
            container.addChild(sprite)
        }
    },
}
</script>

<style lang="scss" scoped>
.PixiHero {
    width: 100%;
    height: 100vh;
}
</style>
