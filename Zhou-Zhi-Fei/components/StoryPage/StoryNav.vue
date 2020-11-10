<template>
    <div class="StoryNav">
        <div class="StoryNav__container">
            <div
                v-for="item in chapterList"
                :key="item.id"
                class="StoryNav__container_item"
                :class="{ currentChapter: currentChapter === item.id }"
                @click="chooseChapter(item.id)"
            >
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<script>
import chapterMixin from '~/mixins/chapterMixin'
export default {
    mixins: [chapterMixin],
    data() {
        return {
            currentChapter: 1,
        }
    },
    methods: {
        chooseChapter(newId) {
            this.currentChapter = newId
        },
    },
}
</script>

<style lang="scss" scoped>
.StoryNav {
    height: 100vh;

    border-right: 1px solid $lightBlue;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    &__container {
        width: 166px;
        margin-right: 50px;

        &_item {
            cursor: pointer;
            font-size: 14px;
            line-height: 2.14;
            text-align: right;
            color: #9b9b9b;
        }

        .currentChapter {
            font-weight: 500;
            color: #57647f;
        }
    }
}
</style>
