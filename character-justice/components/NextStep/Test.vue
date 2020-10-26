<template>
    <div class="Test">
        <h1 class="Test__title NextStep__title">閱讀測驗</h1>
        <span>{{ questionList[currentQuestion - 1].question }}</span>
        <div class="Test__question">
            <div
                class="Test__question_selection"
                v-for="item in questionList[currentQuestion - 1].choices"
                :key="item.id"
                :class="{
                    iAmAnswer:
                        item.id === questionList[currentQuestion - 1].answer.id,
                }"
            >
                <input
                    type="radio"
                    :value="item"
                    v-model="selection"
                    @click="getSelectionDOM"
                    :class="{ blockInput: answered }"
                /><label>{{ item.content }}</label>
            </div>
        </div>

        <Button
            v-if="answered === false"
            title="送出看答案"
            :fitDiv="true"
            @click.native="checkAnswer"
        />
        <!-- <Button
            v-else
            title="下一題"
            :fitDiv="true"
            @click.native="nextQuestion"
        /> -->

        <div v-if="answered" class="Test__result">
            <div class="Test__result_title NextStep__title">
                {{
                    questionList[currentQuestion - 1].answer.id === selection.id
                        ? '答對了'
                        : '答錯了'
                }}
            </div>
            <span class="Text__result_content NextStep__content">
                {{ questionList[currentQuestion - 1].detail }}
            </span>
        </div>
    </div>
</template>

<script>
import Button from '~/components/Button'

export default {
    components: { Button },
    props: ['questionList'],
    data() {
        return {
            currentQuestion: 1,
            answered: false,
            selection: { id: 0, content: '' },

            selectionDOM: {},
            answerDom: {},
        }
    },
    mounted() {},
    methods: {
        nextQuestion() {
            const questionCount = this.questionList.length

            const nextQuestion =
                this.currentQuestion >= questionCount
                    ? 1
                    : this.currentQuestion + 1

            // set to next question
            this.currentQuestion = nextQuestion
            // clear state for next question
            this.selection = { id: 0, content: '' }
            this.answered = false
            // clear DOM color
            this.selectionDOM.classList.remove('selectedWrong')
            this.answerDom.classList.remove('selectedRight')
        },

        checkAnswer() {
            // Return if there's no selection
            if (this.selection.content === '') {
                this.noSelectionAnimation()
                return
            }
            // Get answer DOM
            this.answerDom = document.querySelector('.iAmAnswer')

            // If get wrong choice, turn choice DOM to red
            // and turn answer DOM to green
            if (
                this.selection.id !==
                this.questionList[this.currentQuestion - 1].answer.id
            ) {
                this.selectionDOM.classList.add('selectedWrong')
                this.answerDom.classList.add('selectedRight')

                // If answer is correct, choice DOM to green
            } else {
                this.selectionDOM.classList.add('selectedRight')
            }

            // Show result
            this.answered = true
        },

        getSelectionDOM(e) {
            this.selectionDOM = e.target.parentElement
        },

        noSelectionAnimation() {
            const choicesBlock = document.querySelector('.Test__question')

            choicesBlock.classList.add('boom')
            setTimeout(() => {
                choicesBlock.classList.remove('boom')
            }, 100)
        },
    },
}
</script>

<style lang="scss" scoped>
.Test {
    width: 100%;
    margin-bottom: 90px;

    &__question {
        transform-origin: center;
        margin-bottom: 20px;
        &_selection {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }

    input {
        margin-right: 15px;
        height: 18px;
        width: 18px;
        bottom: -3px;
    }

    &__result {
        margin-top: 30px;
        &_title {
            text-align: center;
        }
    }
}
.selectedWrong {
    background: rgba(237, 130, 141, 0.2);
}
.selectedRight {
    background: rgba(130, 235, 237, 0.2);
}

.boom {
    animation: boom 0.1s ease-in-out;
}

.blockInput {
    pointer-events: none;
}

@keyframes boom {
    from {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    to {
        transform: translateY(0);
    }
}
</style>
