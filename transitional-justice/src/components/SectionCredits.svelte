<section class="credits">
  <p>
    <span>監製：簡信昌</span>
    <span>製作人：李又如、陳玟諺</span>
  </p>
  <p>
    <span>記者：陳珮瑜</span>
    <span>攝影：林煒凱</span>
  </p>
  <p>
    <span>設計：陳怡蒨</span>
    <span>工程：熊凱文</span>
  </p>
  <p>
    <span>社群：徐湘芸</span>
  </p>
  <p>
    <span>2020-10-31</span>
  </p>
</section>

<script>
  import { onMount } from 'svelte'
  import scrollama from "scrollama"

  let isScrollEventSent = false
  onMount(() => {
    const scroller = scrollama()
    scroller
      .setup({
        step: ".credits",
        offset: 1,
        // debug: true
      })
      .onStepEnter(response => {
        if (!isScrollEventSent) {
          ga('send', 'event', 'projects', 'scroll', 'credit', { nonInteraction: false })
          isScrollEventSent = true
        }
      })

    // setup resize event
    window.addEventListener("resize", scroller.resize);
  })
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 23px 0;
    background-color: #006db2;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
</style>