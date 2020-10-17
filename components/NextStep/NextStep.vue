<template>
    <div class="NextStep">
        <div class="NextStep__container">
            <Test :questionList="questionList" />
        </div>
    </div>
</template>

<script>
import Test from './Test'

export default {
    components: {
        Test,
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
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.NextStep {
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
    }

    span,
    label {
        font-family: 'PingFang TC';
        font-size: 16px;
        font-weight: normal;
        line-height: 2;
        color: #000000;
    }
}
</style>
