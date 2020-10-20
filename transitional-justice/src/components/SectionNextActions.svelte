<section class="section-next-actions">
  <img class="curtain" src="./butterfly-bg-web.png" alt="curtain">
  <div class="wrapper">
    <div class="actions__action quiz">
      <h1>閱讀測驗</h1>
      <form action="">
        <p>根據轉型正義資料庫的受難者資料，下列哪一位最常在審判過程中加重政治受難者的刑度？</p>
        <label>
          <input type=radio bind:group={answer} value={1}>
          前參謀總長 周至柔
        </label>
        <label>
          <input type=radio bind:group={answer} value={2}>
          前總統 蔣介石
        </label>
        <label>
          <input type=radio bind:group={answer} value={3}>
          前總統府參軍長 劉士毅
        </label>
        <label>
          <input type=radio bind:group={answer} value={4}>
          前總統府參軍長 桂永清
        </label>
        {#if !isSubmit}
        <button on:click={handleQuizSubmit}>
          <p>送出看答案</p>
        </button>
        {/if}
      </form>
      {#if isSubmit}
      <div class="results">
        {#if answer === 1}
        <h1>答對了！</h1>
        <p>我們統計資料庫案件的每筆審理流程，從「審理人」次數可發現，前參謀總長周至柔最常加重受難者的刑度，其次是前總統蔣介石、前總統府參軍長劉士毅。</p>
        {:else}
        <h1>答錯了！</h1>
        <p>我們統計資料庫案件的每筆審理流程，從「審理人」次數可發現，前參謀總長周至柔最常加重受難者的刑度，其次是前總統蔣介石、前總統府參軍長劉士毅。</p>
        {/if}
      </div>
      {/if}
    </div>
    <div class="actions__action cares">
      <h1>如果你關心這個議題，你可以⋯⋯</h1>
      <ol>
        <li>
          <p>對戒嚴時期的軍事審判制度有興趣，或是好奇政治受難者的審判過程，可至<a href="https://twtjcdb.tjc.gov.tw/" target="_blank" rel="noreferrer noopener">轉型正義資料庫的資料</a>查詢。</p>
        </li>
        <li>
          <p>可搜尋國家人權博物館的<a href="https://www.facebook.com/TaiwanNHRM/" target="_blank" rel="noreferrer noopener">社群平臺</a>，追蹤轉型正義相關活動。</p>
        </li>
      </ol>
    </div>
    <div class="actions__action about-data">
      <h1>這個報導使用到的資料</h1>
      <p>我們以爬蟲的方式抓取促進轉型正義委員會公開之<a href="https://twtjcdb.tjc.gov.tw/" target="_blank" rel="noreferrer noopener">轉型正義資料庫的資料</a>，整理政治受難者的基本檔案、起訴書、審理過程與最終判決內容，都已經開放在 <a href="https://github.com/readr-media/readr-data/tree/master/justice" target="_blank" rel="noreferrer noopener">GitHub</a>，歡迎使用！</p>
    </div>
    <div class="actions__action about-characters">
      <h1>看政治受難者的故事</h1>
      <a
        class="about-characters__link"
        href="https://www.readr.tw/project/3/character-justice/"
        target="_blank"
        rel="noreferrer noopener"
        on:click={ () => { ga('send', 'event', 'projects', 'click', '看政治受難者的故事', { nonInteraction: false }) } }
      >
        <img src="./人物篇 og.jpg" alt="characters-og">
        <p>走過白色恐怖：受難者的劫後人生</p>
      </a>
    </div>
  </div>
  <img class="curtain curtain--reverse" src="./butterfly-bg-web.png" alt="curtain">
</section>

<script>
  import {onMount} from "svelte";
  import scrollama from "scrollama";

  let answer = 0
  let isSubmit = false

  function handleQuizSubmit(e) {
    e.preventDefault()
    if (answer === 0) {
      return
    }
    isSubmit = true
    switch (answer) {
      case 1:
        ga('send', 'event', 'projects', 'click', '答對', { nonInteraction: false })
        return
      case 2:
        ga('send', 'event', 'projects', 'click', '答錯（蔣）', { nonInteraction: false })
        return
      case 3:
        ga('send', 'event', 'projects', 'click', '答錯（劉）', { nonInteraction: false })
        return
      case 4:
        ga('send', 'event', 'projects', 'click', '答錯（桂）', { nonInteraction: false })
        return
    }
  }

  let isScrollEventSent = false
  onMount(() => {
    const scroller = scrollama()
    scroller
      .setup({
        step: ".quiz",
        offset: 1,
        // debug: true
      })
      .onStepEnter(response => {
        if (!isScrollEventSent) {
          ga('send', 'event', 'projects', 'scroll', '閱讀測驗', { nonInteraction: false })
          isScrollEventSent = true
        }
      })

    // setup resize event
    window.addEventListener("resize", scroller.resize);
  })
</script>

<style>
  .section-next-actions {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: #000000;
  }

  .curtain {
    width: 100%;
  }
  .curtain--reverse {
    transform: rotate(180deg);
  }
  @media (max-width: 768px) {
    .curtain {
      height: 100px;
      object-fit: cover;
    }
  }

  .wrapper {
    max-width: 500px;
    margin: 0 auto;
    padding: 30px 0;
  }
  @media (max-width: 768px) {
    .wrapper {
      padding: 30px 20px;
    }
  }

  .actions__action + .actions__action {
    margin: 60px 0 0 0;
  }

  h1 {
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    margin: 0 0 15px 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  form button {
    height: 40px;
    border-radius: 20px;
    background-color: #006db2;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin: 20px 0 0 0;
  }

  .results {
    margin: 30px 0 0 0;
  }
  li {
    display: flex;
  }
  li:before {
    content: '';
    display: inline-block;
    width: 12px;
    min-width: 12px;
    max-width: 12px;
    height: 12px;
    min-height: 12px;
    max-height: 12px;
    border-radius: 100%;
    background-color: #006db2;
    margin: 11px 8px 0 0;
  }

  .results h1 {
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }

  .about-data a {
    text-decoration: underline;
    color: #006db2;
  }
  .cares a {
    text-decoration: underline;
    color: #006db2;
  }

  .about-characters__link {
    display: flex;
  }
  .about-characters__link img {
    width: 200px;
    height: 100px;
    margin: 0 15px 0 0;
  }
  .about-characters__link p {
    font-size: 21px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: normal;
    color: #000000;
  }
  @media (max-width: 768px) {
    .about-characters__link {
      flex-direction: column;
    }
    .about-characters__link img {
      width: 100%;
      height: auto;
      margin: 0;
    }
    .about-characters__link p {
      margin: 10px 0 0 0;
      text-align: center;
    }
  }
</style>