<section class="section-character">
  <picture>
    <source
      srcset="./butterfly-line-02.svg"
      media="(max-width: 768px)"
    >
    <img
      class="decoration"
      src="./butterfly-dot-02.svg"
      alt="section-character-decoration"
    >
  </picture>
  <seciton class="descriptions">
    <div class="descriptions__description">
      <p>超過一萬名的平民在戒嚴時期進入軍法審判，</p>
      <p>命運有了劇烈的變化。</p>
    </div>
    <div class="descriptions__description">
      <p>有些人的生命驟下句點，有些人展開不見天日的牢獄歲月…</p>
    </div>
    <div class="descriptions__description">
      <p>審判之後，他們何去何從呢？</p>
    </div>
  </seciton>
  <section class="relates">
    <div class="characters-wrapper">
      <h1>看政治受難者的故事</h1>
      <ol class="characters-list">
        <li class="characters-list__list-item">
          <a
            href="https://www.readr.tw/project/3/character-justice/#1"
            target="_blank"
            rel="noreferrer noopener"
            on:click={() => { ga('send', 'event', 'projects', 'click', '受難者張', { nonInteraction: false }) }}
          >
            <img class="{reduceImgGrayscale ? 'reduced' : ''}" src="./characters/1.jpg" alt="character">
            <h1>張常美</h1>
            <p>目送獄友走向行刑場</p>
          </a>
        </li>
        <li class="characters-list__list-item">
          <a
            href="https://www.readr.tw/project/3/character-justice/#2"
            target="_blank"
            rel="noreferrer noopener"
            on:click={() => { ga('send', 'event', 'projects', 'click', '受難者劉', { nonInteraction: false }) }}
          >
            <img class="{reduceImgGrayscale ? 'reduced' : ''}" src="./characters/3.jpg" alt="character">
            <h1>劉秀明</h1>
            <p>獄友被刑求到精神失常</p>
          </a>
        </li>
        <li class="characters-list__list-item">
          <a
            href="https://www.readr.tw/project/3/character-justice/#3"
            target="_blank"
            rel="noreferrer noopener"
            on:click={() => { ga('send', 'event', 'projects', 'click', '受難者高', { nonInteraction: false }) }}
          >
            <img class="{reduceImgGrayscale ? 'reduced' : ''}" src="./characters/2.jpg" alt="character">
            <h1>高金郎</h1>
            <p>討論電影劇情就被抓</p>
          </a>
        </li>
        <li class="characters-list__list-item">
          <a
            href="https://www.readr.tw/project/3/character-justice/#4"
            target="_blank"
            rel="noreferrer noopener"
            on:click={() => { ga('send', 'event', 'projects', 'click', '受難者周', { nonInteraction: false }) }}
          >
            <img class="{reduceImgGrayscale ? 'reduced' : ''}" src="./characters/4.jpg" alt="character">
            <h1>周賢農</h1>
            <p>未滿 18 歲就入獄</p>
          </a>
        </li>
      </ol>
    </div>
  </section>
</section>

<script>
  import {onMount} from "svelte";
  import scrollama from "scrollama";

  let reduceImgGrayscale = false
  onMount(() => {
    const scroller = scrollama()
    scroller
      .setup({
        step: ".relates",
        offset: 0.2,
        // debug: true
      })
      .onStepEnter(() => {
        if (!reduceImgGrayscale) {
          reduceImgGrayscale = true
        }
      })

    // setup resize event
    window.addEventListener("resize", scroller.resize);
  })

  let isScrollEventSent = false
  onMount(() => {
    const scroller = scrollama()
    scroller
      .setup({
        step: ".characters-wrapper",
        offset: 1,
        // debug: true
      })
      .onStepEnter(response => {
        if (!isScrollEventSent) {
          ga('send', 'event', 'projects', 'scroll', '看政治受難者的故事', { nonInteraction: false })
          isScrollEventSent = true
        }
      })

    // setup resize event
    window.addEventListener("resize", scroller.resize);
  })
</script>

<style>
  .section-character {
    padding: 20vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .decoration {
    position: absolute;
    left: -24px;
    bottom: 50%;
    height: 300px;
  }
  @media (max-width: 768px) {
    .decoration {
      position: static;
      width: 50vw;
      margin: 0 0 50px 0;
    }
  }

  .descriptions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    .descriptions {
      padding: 0 20px;
    }
  }

  .descriptions__description {
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: center;
    color: #4a4a4a;
  }
  .descriptions__description + .descriptions__description {
    margin: 40px 0 0 0;
  }

  .relates {
    margin: 60px 0 0 0;
  }

  .characters-wrapper {
    width: 800px;
    border: solid 1px #979797;
  }
  .characters-wrapper > h1 {
    background-color: #e0c950;
    text-align: center;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }
  @media (max-width: 768px) {
    .characters-wrapper {
      width: 100%;
    }
  }

  .characters-list {
    display: flex;
    justify-content: space-between;
    padding: 35px 55px;
  }
  @media (max-width: 768px) {
    .characters-list {
      padding: 21px;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: -21px 0 0 -21px;
    }
  }

  .characters-list__list-item {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    color: #000000;
  }

  .characters-list__list-item img {
    filter: grayscale(1);
    transition: filter 0.25s ease-out;
  }
  @media (max-width: 768px) {
    .characters-list__list-item {
      width: calc((100% - 21px * 2) / 2);
      margin: 21px 0 0 21px;
    }

    .characters-list__list-item img {
      width: 100%;
    }
  }

  .characters-list__list-item img.reduced {
    filter: grayscale(0);
  }

  .characters-list__list-item h1 {
    margin: 8px 0 0 0;
  }
</style>