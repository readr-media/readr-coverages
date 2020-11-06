<template>
    <div class="NextStep">
        <div class="NextStep__top_bg">
            <img :src="bg_web" alt="butterfly" />
        </div>
        <div class="NextStep__container">
            <!-- <Test :questionList="questionList" /> -->

            <h1 class="NextStep__title">
                如果你想更關心這個議題，可以怎麼做？
            </h1>

            <div class="NextStep__content">
                <ul class="NextStep__list">
                    <li>
                        <ListDot color="#006db2" />
                        對戒嚴時期的軍事審判制度有興趣，或是好奇政治受難者的審判過程，可至<a
                            href="https://twtjcdb.tjc.gov.tw/"
                            target="_blank"
                            >轉型正義資料庫</a
                        >查詢。
                    </li>
                    <li>
                        <div class="NextStep__list_marker">
                            <div class="dot"></div>
                        </div>
                        可搜尋國家人權博物館的<a
                            href="https://www.facebook.com/TaiwanNHRM/"
                            target="_blank"
                            >社群平臺</a
                        >，追蹤轉型正義相關活動。
                    </li>
                </ul>
            </div>

            <h1 class="NextStep__title">這個報導使用到的資料</h1>

            <div class="NextStep__content" :style="{ marginBottom: '76px' }">
                我們以爬蟲的方式抓取促進轉型正義委員會公開之<a
                    href="https://twtjcdb.tjc.gov.tw"
                    target="_blank"
                    >轉型正義資料庫的資料</a
                >，整理政治受難者的基本檔案、起訴書、審理過程與最終判決內容，都已經開放在
                <a
                    href="https://github.com/readr-media/readr-data/tree/master/justice"
                    target="_blank"
                    >GitHub</a
                >，歡迎使用！
            </div>

            <h1 class="NextStep__title">看轉型正義分析報導</h1>
            <AnalyzePreview :news="web" />
        </div>

        <div class="NextStep__bottom_bg">
            <img :src="bg_web" alt="butterfly" />
        </div>
    </div>
</template>

<script>
// import Test from '~/components/NextStep/Test'
import ListDot from '~/components/ListDot'
import AnalyzePreview from '~/components/AnalyzePreview'
import transitional_og from '~/static/images/transitional_og.jpg'

import bg_web from '~/static/images/butterfly-bg-web.png'
import bg_mobile from '~/static/images/butterfly-bg-mobile.png'

export default {
    components: {
        // Test,
        ListDot,
        AnalyzePreview,
    },

    data() {
        return {
            // questionList: [
            //     {
            //         id: 1,
            //         question:
            //             '根據轉型正義資料庫的受難者資料，下列哪一位最常在審判過程中加重政治受難者的刑度？',
            //         choices: [
            //             { id: 1, content: '前參謀總長 周至柔' },
            //             { id: 2, content: '前總統 蔣介石' },
            //             { id: 3, content: '前總統府參軍長 劉士毅' },
            //             { id: 4, content: '前總統府參軍長 桂永清' },
            //         ],
            //         answer: { id: 1, content: '前參謀總長 周至柔' },
            //         detail:
            //             '我們統計資料庫案件的每筆審理流程，從「審理人」次數可發現，前參謀總長周至柔最常加重受難者的刑度，其次是前總統蔣介石、前總統府參軍長劉士毅。',
            //     },
            // ],
            web: {
                id: 1,
                title: '轉型正義之路：從戒嚴時期受難者資料揭開白色恐怖的秘密',

                image: transitional_og,
                url: 'https://www.readr.tw/project/3/transitional-justice',
            },
            bg_web,
            bg_mobile,
        }
    },
}
</script>

<style lang="scss">
.NextStep {
    position: relative;
    z-index: 3;
    background: white;
    &__container {
        width: 100%;
        padding: 47px 20px;
        z-index: 4;
    }
    @include atSmall {
        &__container {
            width: 500px;
            margin: auto;
        }
    }

    &__title {
        font-family: 'PingFang TC';
        font-size: 21px;
        font-weight: normal;
        line-height: 1.52;
        text-align: center;
        margin-bottom: 10px;
    }

    &__content,
    span,
    label {
        font-family: 'PingFang TC';
        font-size: 16px;
        font-weight: normal;
        line-height: 2;
        color: #000000;
    }

    &__list {
        margin-left: 20px;
        list-style: none;
        margin-bottom: 40px;

        li {
            font-family: 'PingFang TC';
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 2;
            letter-spacing: normal;
            color: #000000;
        }

        &_marker {
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 16px;

            margin-left: -20px;

            .dot {
                width: 12px;
                height: 12px;
                border-radius: 6px;
                background-color: #006db2;
                // top: 50%;
                // right: 50%;
                margin: auto;
                transform: translateY(8px);
            }
        }
        // ::marker {
        //     display: block;
        //     color: #006db2;
        //     width: 12px;
        // }
    }

    &__top_bg,
    &__bottom_bg {
        width: 100%;
        // position: absolute;
        pointer-events: none;
        z-index: 3;
        img {
            width: 100%;
            display: block;
        }
    }
    &__top_bg {
        top: 0;
    }
    &__bottom_bg {
        bottom: 0;
        transform: rotate(180deg);
    }

    a {
        color: #006db2;
        text-decoration-line: underline;
    }
}
</style>
