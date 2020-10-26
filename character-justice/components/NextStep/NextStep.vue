<template>
    <div class="NextStep">
        <div class="NextStep__container">
            <Test :questionList="questionList" />

            <h1 class="NextStep__title">
                如果你想更關心這個議題，可以怎麼做？
            </h1>

            <div class="NextStep__content">
                <ul class="NextStep__list">
                    <li>
                        <ListDot color="#006db2" />
                        對戒嚴時期的軍事審判制度有興趣，或是好奇政治受難者的審判過程，可至轉型正義資料庫查詢。
                    </li>
                    <li>
                        <div class="NextStep__list_marker">
                            <div class="dot"></div>
                        </div>
                        可搜尋國家人權博物館的社群平臺，追蹤轉型正義相關活動。
                    </li>
                </ul>
            </div>

            <h1 class="NextStep__title">這個報導使用到的資料</h1>

            <div class="NextStep__content" :style="{ marginBottom: '76px' }">
                我們以爬蟲的方式抓取促進轉型正義委員會公開之<a
                    href="https://twtjcdb.tjc.gov.tw"
                    >轉型正義資料庫的資料</a
                >，整理政治受難者的基本檔案、起訴書、審理過程與最終判決內容，都已經開放在
                github，歡迎使用！
            </div>

            <h1 class="NextStep__title">看轉型正義分析報導</h1>
        </div>
    </div>
</template>

<script>
import Test from '~/components/NextStep/Test'
import ListDot from '~/components/ListDot'

export default {
    components: {
        Test,
        ListDot,
    },

    data() {
        return {
            questionList: [
                {
                    id: 1,
                    question:
                        '根據轉型正義資料庫的受難者資料，下列哪一位最常在審判過程中加重政治受難者的刑度？',
                    choices: [
                        { id: 1, content: '前參謀總長 周至柔' },
                        { id: 2, content: '前總統 蔣介石' },
                        { id: 3, content: '前總統府參軍長 劉士毅' },
                        { id: 4, content: '前總統府參軍長 桂永清' },
                    ],
                    answer: { id: 2, content: '前總統 蔣介石' },
                    detail:
                        'READr 分析農委會近十年的水果產量統計，發現 2019 年的龍眼產量銳減 76%，跌幅為所有水果中最高，其次是 2019 年的荔枝（跌幅 68%）、2019 年的柿子（跌幅 53%）。農改場 2018 年底至 2019 年初是臺灣觀測史上最溫暖的冬季，龍眼樹體無法好好休眠，影響後續的開花結果，主產區臺南東山區農會表示，許多果農去年的收成頂多只有常年的一成。',
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.NextStep {
    position: relative;
    z-index: 1;
    background: white;
    &__container {
        width: 100%;
        padding: 130px 0;
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
}
</style>
