<template>
    <div class="Hero">
        <div class="Hero__background">
            <picture>
                <source media="(min-width:760px" :srcset="Hero_web" />
                <source media="(min-width:480px" :srcset="Hero_pad" />
                <img :src="Hero_mobile" alt="" />
            </picture>

            <div class="Hero__background_blackBlock" />

            <div class="Hero__background_mask" />
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
            資料來源：國家發展委員會檔案管理局，<a href="">國家檔案資訊網</a>
        </div>
    </div>
</template>

<script>
import Hero_mobile from '~/static/images/Hero_mobile.jpg'
import Hero_pad from '~/static/images/Hero_pad.jpg'
import Hero_web from '~/static/images/Hero_web.jpg'

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
                title: ['轉型正義'],
                content:
                    '武漢肺炎在國外疫情仍在延燒，READr 探索了從一月至今在全世界傳播的假訊息。際價的代節究果機文車可未年利助都會點年發格這不文等背樂教父的體師排極才少子人全？去候然近……。',
            },
            Hero_mobile,
            Hero_pad,
            Hero_web,
        }
    },
}
</script>

<style lang="scss" scoped>
.Hero {
    position: relative;
    width: 100%;
    &__background {
        img {
            width: 100%;
        }

        &_blackBlock {
            width: 100%;
            height: 200px;
            background: black;
        }

        &_mask {
            position: absolute;
            width: 100%;
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
            width: auto;
        }
    }

    @include atMedium {
        &__text {
            padding: 0 40px 81px;

            &_title2 {
                margin-bottom: 40px;
            }
        }
    }
}
</style>
