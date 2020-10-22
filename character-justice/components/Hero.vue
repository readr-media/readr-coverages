<template>
    <div class="Hero">
        <div class="Hero__background">
            <img class="Hero__background_image" :src="heroBackground" alt="" />
        </div>
        <div class="Hero__title">
            <span
                class="Hero__title_word"
                v-for="(word, index) in hero.title"
                :key="index"
                :class="`word_${index}`"
                >{{ word }}</span
            >
        </div>

        <div class="Hero__content">
            <span>{{ hero.content }}</span>
        </div>
    </div>
</template>

<script>
import heroBackground from '~/static/images/hero.jpeg'

export default {
    head: {
        script: [
            {
                src:
                    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
            },
        ],
    },
    data() {
        return {
            hero: {
                title: ['轉', '型', '正', '義'],
                content:
                    '武漢肺炎在國外疫情仍在延燒，READr 探索了從一月至今在全世界傳播的假訊息。際價的代節究果機文車可未年利助都會點年發格這不文等背樂教父的體師排極才少子人全？去候然近……。',
            },
            heroBackground,
        }
    },
}
</script>

<style lang="scss" scoped>
.Hero {
    position: relative;
    // margin-bottom: 100vh;
    z-index: 1;

    &__background {
        background: rgb(38, 37, 37);
        height: 100vh;
        overflow: hidden;

        img {
            width: 100%;
        }

        // opacity: 0.5;
        // background-color: #d8d8d8;
    }

    &__title {
        position: absolute;
        width: 280px;
        display: flex;
        flex-direction: row;
        padding: 0.2rem;

        background: rgba(0, 0, 0, 0.5);
        box-sizing: content-box;

        &_word {
            font-family: 'Songti TC';
            // font-family: PingFang TC;
            font-size: 80px;
            // font-weight: bold;
            text-align: justify;
            color: #e0c950;
        }
        .word_0 {
            margin-top: 30px;
        }

        .word_2 {
            margin-top: 95px;
            margin-left: -40px;
        }
        .word_3 {
            margin-top: 116px;
        }
    }

    &__content {
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        padding: 0.2rem;
        box-sizing: content-box;

        span {
            font-family: PingFang TC;
            font-size: 16px;
            font-weight: 500;
            line-height: 1.75;
            text-align: justify;
            color: #ffffff;
        }
    }

    @include atMedium {
        &__title {
            top: 20.88%;
            left: 293px;
        }
        &__content {
            top: 44.44%;
            left: 131px;
            width: 280px;
            height: 149px;
        }
    }
}
</style>
