<section class="app">
  <readr-header class="app__readr-header readr-header"></readr-header>
  <section class="app__main-section main-section">
    <SectionLanding class="main-section__section-landing" />
    <section class="main-section__story main-section__explore-story explore-story">
      腳本編號 02
      10710 隻蝴蝶
    </section>
    <section class="main-section__story main-section__butterfly-story butterfly-story" style="padding-bottom: 10px">
<!--      <span>{currentChapterScene}</span>-->
<!--      <span>{currentChapter} - {currentScene}</span>-->
      <figure class="figure" style="display: flex;justify-content: center;align-items: center; padding: 100px 0">
        <!--{#if currentChapter === '1' && currentScene === '0'}-->
          <img src="./exp/mockChapter1.png" alt="">
        <!--{:else if currentChapter === '2' && currentScene === '0'}-->
        <!--  <img src="./exp/mockChapter2.png" alt="">-->
        <!--{:else if currentScene !== '0'}-->
        <!--  <img src="./exp/mockButterfly.png" alt="">-->
        <!--{/if}-->
        <!--{#if currentChapterScene === '1-0'}-->
        <!--  <img src="./exp/mockChapter1.png" alt="">-->
        <!--{:else if currentChapterScene === '2-0'}-->
        <!--  <img src="./exp/mockChapter2.png" alt="">-->
        <!--{:else if currentChapterScene !== '1-0' && currentChapterScene !== '2-0'}-->
        <!--  <img src="./exp/mockButterfly.png" alt="">-->
        <!--{/if}-->
      </figure>
      <figure class="sticky-figure">
        <img src="./exp/mockButterfly.png" alt="" style="width: 100%;height: 60vh">
      </figure>
      <!-- section -> chapter -> scene -->
      <!-- story-section are repeated each chapter -->
      <section class="story-section">
        <article class="article">
          <div class="text-box" data-chapter="1" data-scene="0" data-next="1-1" data-prev="" style="margin-bottom: 0;visibility: hidden">placeholder for 1-0</div>
          <div class="text-box" data-chapter="1" data-scene="1" data-next="1-2" data-prev="1-0">這些受難者的性別有超過 9 成是男性，女性僅佔 4%。</div>
          <div class="text-box" data-chapter="1" data-scene="2" data-next="1-3" data-prev="1-1">本省人和外省人受難人數不分軒輊，各佔 55％和 45％。</div>
          <div class="text-box" data-chapter="1" data-scene="3" data-next="1-4" data-prev="1-2">受難者們幾乎都在青年時期被起訴，20 至 29 歲佔比最多。值得注意的是，未成年和 70 歲以上被起訴的人雖然比較少，但最年輕的只有 14 歲，最年長的是 77 歲。</div>
          <div class="text-box" data-chapter="1" data-scene="4" data-next="1-5" data-prev="1-3">戒嚴時期的臺灣社會遭到政府全面監控，情治機關（註）逮捕、偵訊大量平民，起訴最多人的單位是「臺灣省保安司令部」，其次是「臺灣警備總司令部」和「國防部」。</div>
          <div class="text-box" data-chapter="1" data-scene="5" data-next="1-6" data-prev="1-4">前兩者算是同一個單位，「臺灣省保安司令部」於 1949 年成立，9 年後和「臺灣防衛總司令部」等單位合併為「臺灣警備總司令部」（簡稱警總），是主要的情治機關（註）。<br><br>它們都是為什麼起訴這些受難者呢？</div>
          <div class="text-box" data-chapter="1" data-scene="6" data-next="1-7" data-prev="1-5">「顛覆政府」（註）是最常見的起訴原因。這些受難者中，可以發現本省人比例較高（64%），且時間多落在戒嚴初期（民國 40 至 49 年）。</div>
          <div class="text-box" data-chapter="1" data-scene="7" data-next="1-8" data-prev="1-6">常見理由還有「參加叛亂的組織或集會」及「明知是對方匪諜卻不舉報」（註）。前者同樣是本省人佔多數，時間分佈上也集中在戒嚴初期（民國 40 至 49 年）。</div>
          <div class="text-box" data-chapter="1" data-scene="8" data-next="1-9" data-prev="1-7">中研院臺史所助研究員林正慧指出，本省案件早期都是中共在臺地下組織（註），例如「臺灣省工作委員會」和「臺灣民主自治同盟案」，50 年代初期就遭情治機關掃蕩殆盡；後期則是臺獨案最多。</div>
          <div class="text-box" data-chapter="1" data-scene="9" data-next="2-0" data-prev="1-8">林正慧也提到，外省人涉及的案件以「軍隊保防案」為主，例如批評時政、投降敵軍等，另外還有間諜案、情治機關內鬥。</div>
        </article>
      </section>
    </section>
    <section class="main-section__story main-section__butterfly-story butterfly-story">
      <figure class="figure" style="display: flex;justify-content: center;align-items: center; padding: 100px 0">
        <!--{#if currentChapter === '1' && currentScene === '0'}-->
          <img src="./exp/mockChapter2.png" alt="">
        <!--{:else if currentChapter === '2' && currentScene === '0'}-->
        <!--  <img src="./exp/mockChapter2.png" alt="">-->
        <!--{:else if currentScene !== '0'}-->
        <!--  <img src="./exp/mockButterfly.png" alt="">-->
        <!--{/if}-->
        <!--{#if currentChapterScene === '1-0'}-->
        <!--  <img src="./exp/mockChapter1.png" alt="">-->
        <!--{:else if currentChapterScene === '2-0'}-->
        <!--  <img src="./exp/mockChapter2.png" alt="">-->
        <!--{:else if currentChapterScene !== '1-0' && currentChapterScene !== '2-0'}-->
        <!--  <img src="./exp/mockButterfly.png" alt="">-->
        <!--{/if}-->
      </figure>
      <figure class="sticky-figure">
        <img src="./exp/mockButterfly.png" alt="" style="width: 100%;height: 60vh">
      </figure>
      <!-- section -> chapter -> scene -->
      <!-- story-section are repeated each chapter -->
      <section class="story-section">
        <article class="article">
          <div class="text-box" data-chapter="2" data-scene="0" data-next="2-1" data-prev="1-9" style="margin-bottom: 0;visibility: hidden">placeholder for 2-0</div>
          <div class="text-box" data-chapter="2" data-scene="1" data-next="2-2" data-prev="2-0">在這 1 千多位受難者中，共有 72% 受難者在審理過程中被加重刑度，28% 受難者刑度減輕。</div>
          <div class="text-box" data-chapter="2" data-scene="2" data-next="" data-prev="2-1">刑度加重的案件中，加重到死刑的比例超過 3 成，且其中有 47 人原來的刑度較輕（少於有期徒刑 10 年），最後卻被判死刑。</div>
        </article>
      </section>
    </section>
  </section>
</section>

<script>
  import SectionLanding from "../../components/SectionLanding.svelte"
  import "intersection-observer"
  import scrollama from "scrollama"
  import { onMount } from 'svelte'

  let currentChapter = '1'
  let currentScene = '0'
  let currentChapterScene = ''

  onMount(() => {
    const scroller = scrollama()
    scroller
      .setup({
        step: ".text-box",
        offset: 1,
        // debug: true
      })
      .onStepEnter(response => {
        currentChapter = response.element.dataset.chapter
        if (response.direction === 'down') {
          currentScene = response.element.dataset.scene
        } else {
          currentScene = String(Math.max(0, response.element.dataset.scene - 1))
        }
      })
      // .onStepExit(response => {
      //   if (response.direction === 'down') {
      //     currentChapterScene = response.element.dataset.next
      //     console.log('down exit')
      //   } else {
      //     currentChapterScene = response.element.dataset.prev
      //     console.log('up exit')
      //   }
      // })

    // setup resize event
    window.addEventListener("resize", scroller.resize);
  })
</script>

<style>
  .app {
    padding: 62.63px 0;
  }
  .app__readr-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 1000;
  }
  .readr-header {
    border-bottom: 2px solid #d8d8d8;
  }

  .main-section__story {
    /*border: 5px solid red;*/
    /*font-size: 12px;*/
    position: relative;
  }
  .main-section__story span {
    position: fixed;
    top: 100px;
    left: 0;
  }

  .explore-story {
    height: 5000px;
    background-image: url('../exp/mockbutterfly.png');
  }

  .seperator-story {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /*.butterfly-story {*/
  /*  height: 100vh;*/
  /*  overflow: hidden;*/
  /*}*/

  /*.figure {*/
  /*  position: relative;*/
  /*}*/
  .sticky-figure {
    position: sticky;
    width: 100%;
    height: calc(100vh - 62.63px);
    top: 62.63px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /*border: 10px solid blue;*/
    /*background-color: gray;*/
  }

  .story-section {
    min-height: 100vh;
    /*background-color: gray;*/
    /*padding: 100vh 0;*/
  }

  .article {
    width: 30%;
    margin: 0 50px 0 auto;
    position: relative;
  }

  .text-box {
    width: 100%;
    /*height: 500px;*/
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    margin-bottom: 100vh;
    opacity: .7;
  }
</style>