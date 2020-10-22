<template>
    <div
        class="StoryInfo"
        :key="infoList[id - 1].id"
        :class="{ notFix: notFix }"
    >
        <div class="StoryInfo__image">
            <img :src="infoList[id - 1].image" alt="" />
        </div>
        <div class="StoryInfo__content">
            <div class="StoryInfo__content_name">
                {{ infoList[id - 1].name }} 小檔案
            </div>
            <ul class="StoryInfo__content_list">
                <li v-for="(list, index) in infoList[id - 1].info" :key="index">
                    <ListDot color="#ffffff" />{{ list }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import infoList from '~/mixins/infoList'
import ListDot from '~/components/ListDot'

export default {
    mixins: [infoList],
    props: ['id', 'notFix'],
    components: {
        ListDot,
    },
}
</script>

<style lang="scss" scoped>
.StoryInfo {
    z-index: 0;
    width: 100%;
    display: none;
    background-color: #e0c950;

    &__image {
        overflow: hidden;
        img {
            width: 100%;
        }
    }

    &__content {
        background-color: rgba(224, 201, 80, 0.8);
        padding: 16px 29px;

        font-weight: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;

        &_name {
            font-size: 21px;
            margin-bottom: 10px;
        }

        &_list li {
            font-size: 16px;
            line-height: 1.75;
            text-align: justify;
        }
    }

    @include atSmall {
        width: 30%;
        height: calc(100vh - 41px);
        // position: relative;

        display: flex;
        flex-direction: column;

        position: fixed;
        top: 41px;

        &__content {
            position: relative;
            background-color: #e0c950;
            padding: 16px 20px;

            &_name {
                font-size: 1rem;
            }

            &_list li {
                font-size: 0.8rem;
            }
        }

        @include atMedium {
            width: 25%;
            margin-left: 5%;

            &__content {
                &_name {
                    font-size: 1.1rem;
                }

                &_list li {
                    font-size: 0.9rem;
                }
            }
        }

        @include atLarge {
            width: 250px;
            margin-left: 0;

            &__content {
                &_name {
                    font-size: 1.3rem;
                }

                &_list li {
                    font-size: 1rem;
                }
            }
        }
    }

    ul {
        list-style: none;
    }

    li {
        margin-left: 1rem;
    }
}
.notFix {
    position: relative;
    top: 0;
    // margin-top: 41px;
}
</style>
