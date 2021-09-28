<template>
  <section class="timeline">
    <div class="timeline__text">
      <span class="timeline__text__show">點選看肇事原因</span>
      <span class="timeline__text__hide">，</span>
      <span class="timeline__text__show">或往下滑動繼續看事件還原</span>
    </div>
    <ul>
      <li
        v-for="(item, i) in timelineItems"
        :key="item.id"
        @click="handleClicked(i, item.gaStr)"
      >
        <div class="item__time">
          <span>{{ item.timeStr1 }}</span>
          <span>{{ item.timeStr2 }}</span>
        </div>
        <div class="item__content" :class="{ 'not-focus': !item.canClicked }">
          <img :src="item.image" :alt="`${item.title}-image`" />
          <h4>{{ item.title }}</h4>
          <SvgArrowRight v-if="item.canClicked" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import gaMixin from '~/mixins/gaMixin'
import SvgArrowRight from '~/assets/images/arrow-right.svg?inline'

export default {
  components: {
    SvgArrowRight,
  },
  mixins: [gaMixin],
  data() {
    return {
      timelineItems: [
        {
          id: 'id1',
          timeStr1: '2020',
          timeStr2: '3/13',
          gaStr: '20200313支線',
          image: require('~/assets/images/hide1-cover.jpg'),
          title: '引起事故的工程從何而來？',
          canClicked: true,
        },
        {
          id: 'id2',
          timeStr1: '11/24',
          timeStr2: '',
          gaStr: '20201124支線',
          image: require('~/assets/images/hide2-cover.jpg'),
          title: '事故邊坡過去也曾出意外',
          canClicked: true,
        },
        {
          id: 'id3',
          timeStr1: '2021',
          timeStr2: '1/1',
          gaStr: '20210101支線',
          image: require('~/assets/images/hide3-cover.jpg'),
          title: '為什麼停工日有工程進行？',
          canClicked: true,
        },
      ],
    }
  },
  methods: {
    handleClicked(i, gaStr) {
      this.gaClickHandler(gaStr)
      this.$emit('click-item', i)
    },
  },
}
</script>

<style lang="scss" scoped>
.timeline {
  &__text {
    text-align: center;
    &__show {
      display: block;
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      color: #e0e0e0;
      @include media-breakpoint-up(lg) {
        display: inline;
      }
    }
    &__hide {
      display: none;
      @include media-breakpoint-up(lg) {
        display: inline;
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        color: #e0e0e0;
      }
    }
  }
  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    max-width: 360px;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 70px 20px 70px;
    margin: 0 auto;
    @include media-breakpoint-up(lg) {
      flex-direction: row;
      padding: 0;
      max-width: 100vw;
      width: 100vw;
      min-height: auto;
      align-items: center;
      margin: 60px auto 0;
      overflow: hidden;
    }
    li {
      position: relative;
      display: flex;
      @include media-breakpoint-up(lg) {
        flex-direction: column-reverse;
      }
      .item__time {
        width: 38px;
        font-size: 12px;
        line-height: 1.2;
        text-align: right;
        color: #e0e0e0;
        margin: 20px 0 0;
        @include media-breakpoint-up(lg) {
          width: auto;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.2;
          text-align: left;
          margin: 20px 0 0 30px;
        }
      }
      .item__content {
        position: relative;
        width: 215px;
        height: 72px;
        display: flex;
        align-items: center;
        background-color: #292929;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        cursor: pointer;
        padding: 12px;
        margin-left: 38px;
        @include media-breakpoint-up(lg) {
          width: 247px;
          height: 78px;
          margin-left: 0;
          margin-bottom: 36px;
        }
        img {
          width: 27px;
          height: 48px;
          object-fit: cover;
          object-position: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          @include media-breakpoint-up(lg) {
            width: 96px;
          }
        }
        h4 {
          font-size: 16px;
          line-height: 24px;
          color: #fff;
          margin: 0 8px 0 12px;
        }
        svg {
          @include media-breakpoint-up(lg) {
            min-width: 12px;
            height: 19px;
          }
        }
        &.not-focus {
          pointer-events: none;
        }
        &::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 10px 10px 10px 0;
          border-color: transparent #292929 transparent;
          z-index: 15;
          top: 16px;
          left: -10px;
          @include media-breakpoint-up(lg) {
            border-width: 18px 18px 0 18px;
            border-color: #292929 transparent transparent;
            top: auto;
            bottom: -18px;
            left: 30px;
          }
        }
        &::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 10px 10px 10px 0;
          border-color: transparent rgba(255, 255, 255, 0.1) transparent;
          z-index: 10;
          top: 16px;
          left: -11px;
          @include media-breakpoint-up(lg) {
            border-width: 18px 18px 0 18px;
            border-color: rgba(255, 255, 255, 0.1) transparent transparent;
            top: auto;
            bottom: -18px;
            left: 30px;
          }
        }
        &:hover {
          svg {
            path {
              fill: rgba(255, 255, 255, 0.75);
            }
          }
        }
      }
      &::before {
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #e0e0e0;
        top: 23px;
        left: 49px;
        z-index: 5;
        @include media-breakpoint-up(lg) {
          top: auto;
          bottom: 29px;
          left: 44px;
        }
      }
      &:nth-child(2) {
        margin: 60px 0 0;
        @include media-breakpoint-up(lg) {
          margin: 0 0 0 80px;
        }
      }
      &:nth-child(3) {
        margin: 20px 0 0;
        @include media-breakpoint-up(lg) {
          margin: 0 0 0 20px;
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 72px;
      width: 1px;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.1) 10%,
        rgba(255, 255, 255, 0.4) 20%,
        rgba(255, 255, 255, 0.6) 25%,
        rgba(255, 255, 255, 0.75) 30%,
        rgba(255, 255, 255, 0.75) 70%,
        rgba(255, 255, 255, 0.6) 75%,
        rgba(255, 255, 255, 0.4) 80%,
        rgba(255, 255, 255, 0.1) 90%,
        rgba(255, 255, 255, 0) 100%
      );
      @include media-breakpoint-up(lg) {
        top: 120px;
        left: 0;
        width: 100vw;
        height: 1px;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.4) 10%,
          rgba(255, 255, 255, 0.5) 20%,
          rgba(255, 255, 255, 0.6) 25%,
          rgba(255, 255, 255, 0.75) 30%
        );
      }
    }
  }
}
</style>
