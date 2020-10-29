<template>
    <div class="Hero" ref="Hero">
        <div class="Hero__background">
            <div class="Hero__background_pixi" />

            <div class="Hero__background_mask" />
            <div class="Hero__background_blackBlock" />
        </div>

        <div class="Hero__text">
            <div class="Hero__text_title1">走過白色恐怖</div>

            <div class="Hero__text_title2">
                <span class="hightlight">受難者</span>的劫後人生
            </div>

            <div class="Hero__text_content">
                臺灣歷經數十年的威權統治，上萬名政治犯因捲入政治案件鋃鐺入獄，有些人的生命走至終局，有些人則懷著傷痕繼續生活；解嚴之後，他們的日子過得如何？READr
                訪問四名受難者，聽他們道來自己的劫後人生……
            </div>
        </div>
        <div class="Hero__footer">
            <span>
                資料來源：國家發展委員會檔案管理局，<a
                    href="https://aa.archives.gov.tw/Home/Index"
                    target="_blank"
                    >國家檔案資訊網</a
                ></span
            >
        </div>
    </div>
</template>

<script>
import Hero_mobile from '~/static/images/Hero_mobile.jpg'
import Hero_pad from '~/static/images/Hero_pad.jpg'
import Hero_web from '~/static/images/Hero_web.jpg'

import html2canvas from 'html2canvas'
import * as PIXI from 'pixi.js'
import scrollama from 'scrollama'

function getRandom(x) {
    return Math.floor(Math.random() * x) + 1
}

function debounce(func, wait = 50, immediate = true) {
    var timeout
    return function () {
        var context = this,
            args = arguments
        var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

export default {
    data() {
        return {
            hero: {
                title: ['轉型正義'],
                content:
                    '武漢肺炎在國外疫情仍在延燒，READr 探索了從一月至今在全世界傳播的假訊息。際價的代節究果機文車可未年利助都會點年發格這不文等背樂教父的體師排極才少子人全？去候然近……。',
            },
            Hero_mobile,
            Hero_pad,
            Hero_web,
            isAnimationFired: false,
        }

        //Create a Pixi Application
        const app = new PIXI.Application({
            width: clientWidth,
            height: clientHeight,
            transparent: true,
        })

        // put pixi app's canvas into specified DOM
        document.querySelector('.Hero__background_pixi').replaceWith(app.view)
        const container = new PIXI.Container()
        app.stage.addChild(container)

        // active loader
        const loader = new PIXI.Loader()
        const { route, width, height, pieceWidth } = backgroundImageProp
        let imageSprites = []

        loader.add('mainImg', `${route}`).load((loader, resource) => {
            init(resource)
        })

        const init = (item) => {
            let mainImgTexture = item.mainImg.texture

            let rowCount = Math.floor(height / pieceWidth)
            let colCount = Math.floor(width / pieceWidth)

            for (let i = 0; i < rowCount; i++) {
                for (let j = 0; j < colCount; j++) {
                    let rectangle = new PIXI.Rectangle(
                        0 + pieceWidth * j,
                        0 + pieceWidth * i,
                        pieceWidth,
                        pieceWidth
                    )

                    let newTex = new PIXI.Texture(mainImgTexture, rectangle)
                    let sprite = new PIXI.Sprite(newTex)

                    sprite.x = pieceWidth * j
                    sprite.y = pieceWidth * i
                    imageSprites.push(sprite)
                }
            }

            imageSprites.forEach((sprit) => {
                container.addChild(sprit)
                // container.addChildAt(sprit, 0)
            })

            container.width = clientWidth
            container.height = clientHeight

            // const scrollerNavbar = scrollama()

            // scrollerNavbar
            //     .setup({
            //         step: '.CharacterAbout',
            //         offset: 0.8,
            //     })
            //     .onStepEnter((response) => {})
            //     .onStepExit((response) => {
            //         activateAnimation() // activateAnimation()
            //     })
        }

        const activateAnimation = (imageSprites) => {
            if (this.isAnimationFired) return
            // -------------------Activate fade out-------------------
            imageSprites.forEach((sprite, index) => {
                const randomDropDistane = getRandom(20, 30) / 10
                const randomVerticalDistance = Math.random() + 1
                const randomDropDirection = Math.random() >= 0.7 ? 1 : -1
                const randomOpacity = Math.random() / 50

                let randomActiveTime = getRandom(0, 25) * 100 + index * 0.8

                if (sprite.y < height / 4) {
                    randomActiveTime = getRandom(0, 10) * 100 + index * 0.8
                } else if (sprite.y < height / 2) {
                    randomActiveTime = getRandom(0, 15) * 100 + index * 0.8
                } else if (sprite.y < (height * 3) / 4) {
                    randomActiveTime = getRandom(0, 20) * 100 + index * 0.8
                }

                setTimeout(() => {
                    app.ticker.add((delta) => {
                        sprite.alpha -= randomOpacity
                        sprite.y += randomDropDistane
                        sprite.x =
                            sprite.x +
                            ((randomVerticalDistance * randomVerticalDistance -
                                1) /
                                2) *
                                randomDropDirection

                        if (
                            sprite.y > height ||
                            sprite.x > width ||
                            sprite.x < 0 ||
                            sprite.alpha <= 0
                        ) {
                            container.removeChild(sprite)
                        }
                    })
                }, randomActiveTime)
            })
            this.isAnimationFired = true
        }

        document.addEventListener('scroll', () => {
            activateAnimation(imageSprites)
        })
    },
    mounted() {
        // const Hero = document.querySelector('.Hero__background')
        // html2canvas(Hero).then(function (canvas) {
        //     console.log(canvas)
        // })

        let { clientWidth } = this.$refs.Hero
        // backgroundImageProp in desktop preset
        let clientHeight = 0.6 * clientWidth - 62.63
        let backgroundImageProp = {
            route: Hero_web,
            width: 2000,
            height: 1200,
            pieceWidth: 19,
        }

        if (clientWidth < 480) {
            clientHeight = 1.831 * clientWidth
            backgroundImageProp = {
                route: Hero_mobile,
                width: 320,
                height: 586,
                pieceWidth: 9,
            }
        } else if (clientWidth < 760) {
            clientHeight = 1.333 * clientWidth

            backgroundImageProp = {
                route: Hero_pad,
                width: 768,
                height: 1023,
                pieceWidth: 15,
            }
        }

        //Create a Pixi Application
        const app = new PIXI.Application({
            width: clientWidth,
            height: clientHeight,
            transparent: false,
            backgroundColor: 0xffffff,
        })

        // put pixi app's canvas into specified DOM
        document.querySelector('.Hero__background_pixi').replaceWith(app.view)
        const container = new PIXI.Container()
        app.stage.addChild(container)

        // active loader
        const loader = new PIXI.Loader()
        const { route, width, height, pieceWidth } = backgroundImageProp
        let imageSprites = []

        loader.add('mainImg', `${route}`).load((loader, resource) => {
            init(resource)
        })

        const init = (item) => {
            let mainImgTexture = item.mainImg.texture

            let rowCount = Math.floor(height / pieceWidth)
            let colCount = Math.floor(width / pieceWidth)

            for (let i = 0; i < rowCount; i++) {
                for (let j = 0; j < colCount; j++) {
                    let rectangle = new PIXI.Rectangle(
                        0 + pieceWidth * j,
                        0 + pieceWidth * i,
                        pieceWidth,
                        pieceWidth
                    )

                    let newTex = new PIXI.Texture(mainImgTexture, rectangle)
                    let sprite = new PIXI.Sprite(newTex)

                    sprite.x = pieceWidth * j
                    sprite.y = pieceWidth * i
                    imageSprites.push(sprite)
                }
            }

            imageSprites.forEach((sprit) => {
                container.addChild(sprit)
            })

            container.width = clientWidth
            container.height = clientHeight
        }

        const activateAnimation = (imageSprites) => {
            // imageSprites.reverse()
            // -------------------Activate fade out-------------------
            imageSprites.forEach((sprite, index) => {
                const randomDropDistane = getRandom(20, 30) / 10
                const randomVerticalDistance = Math.random() + 1
                const randomDropDirection = Math.random() >= 0.7 ? 1 : -1
                const randomOpacity = Math.random() / 50

                let randomActiveTime = getRandom(0, 25) * 100 + index * 0.8

                if (sprite.y < height / 4) {
                    randomActiveTime = getRandom(0, 10) * 100 + index * 0.8
                } else if (sprite.y < height / 2) {
                    randomActiveTime = getRandom(0, 15) * 100 + index * 0.8
                } else if (sprite.y < (height * 3) / 4) {
                    randomActiveTime = getRandom(0, 20) * 100 + index * 0.8
                }

                setTimeout(() => {
                    app.ticker.add((delta) => {
                        sprite.alpha -= randomOpacity
                        sprite.y += randomDropDistane
                        sprite.x =
                            sprite.x +
                            ((randomVerticalDistance * randomVerticalDistance -
                                1) /
                                2) *
                                randomDropDirection

                        if (
                            sprite.y > height ||
                            sprite.x > width ||
                            sprite.x < 0 ||
                            sprite.alpha <= 0
                        ) {
                            container.removeChild(sprite)
                        }
                    })
                }, randomActiveTime)
            })
        }

        const animationPipeline = () => {
            if (this.isAnimationFired) return
            activateAnimation(imageSprites)

            // -----------------------Zoom cards----------------------------
            // const cards = document.querySelectorAll('.Card')

            // cards.forEach((card, index) => {
            //     setTimeout(
            //         () => {
            //             card.classList.add('normal')
            //         },
            //         index < 4 ? 200 * index + 1500 : 200 * (index - 4) + 1500
            //     )
            // })

            this.isAnimationFired = true
        }

        document.addEventListener('scroll', debounce(animationPipeline))
        // setTimeout(() => {
        //     animationPipeline()
        // }, 1500)
    },
}
</script>

<style lang="scss" scoped>
.Hero {
    position: relative;
    z-index: 1;
    width: 100%;
    min-height: 456px;
    overflow: hidden;
    background: black;
    &__background {
        &_pixi {
            height: 100%;
        }
        overflow: hidden;
        &_blackBlock {
            width: 100%;
            height: 200px;
            background: black;
        }

        &_mask {
            position: absolute;
            // z-index: ;
            width: 100%;
            height: 100%;
            height: calc(100% - 200px);
            top: 0;
            left: 0;
            background-image: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0),
                #000000 99%
            );
        }
    }

    &__text {
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        font-family: 'PingFang TC';
        color: #ffffff;

        padding: 0 20px 123px;
        &_title1 {
            font-size: 20px;
            font-weight: 500;

            line-height: 1.5;
            letter-spacing: 1.33px;
            text-align: justify;
        }

        &_title2 {
            font-size: 30px;
            font-weight: 500;

            line-height: 1.33;
            letter-spacing: 1.2px;
            text-align: justify;

            margin-bottom: 40px;
        }

        &_content {
            font-size: 16px;
            font-weight: normal;

            line-height: 1.75;
            letter-spacing: normal;
            text-align: justify;
        }
    }

    &__footer {
        color: #ffffff;
        font-size: 14px;
        font-weight: normal;

        line-height: normal;
        letter-spacing: normal;

        padding: 0 20px;
        position: absolute;
        width: 100%;
        bottom: 43px;

        display: flex;
        justify-content: center;
    }

    a {
        color: #ffffff;
        text-decoration-line: underline;
    }

    .hightlight {
        color: #e0c950;
    }

    @include atSmall {
        &__background {
            &_blackBlock {
                height: 0;
            }

            &_mask {
                position: absolute;
                width: 100%;
                height: 100%;
                bottom: 0;
                left: 0;
            }
        }

        &__text {
            position: absolute;
            width: 500px;
            box-sizing: border-box;
            font-family: 'PingFang TC';
            color: #ffffff;

            padding: 0 40px 70px;
            &_title1 {
                font-size: 30px;
                line-height: 2.33;
                letter-spacing: 2px;
                text-align: justify;
            }

            &_title2 {
                font-size: 50px;
                line-height: 1.4;
                letter-spacing: 2px;

                margin-bottom: 10px;
            }
        }

        &__footer {
            padding: 0 20px 20px;
            right: 0;
            bottom: 0;
            width: 100%;
            background: black;
            justify-content: flex-end;
        }
    }

    @include atMedium {
        height: 100vh;

        &__background {
            position: relative;
        }

        &__text {
            padding: 0 40px 81px;

            &_title2 {
                margin-bottom: 40px;
            }
        }

        &__footer {
            background: none;
        }
    }
}
</style>
