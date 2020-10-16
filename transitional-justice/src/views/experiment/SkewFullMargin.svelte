<section class="landing-section"></section>
<div>
  <figure class="figure">背景，目前狀態：{ currentTextBoxContent }</figure>
  {#each story.story as storySection, i}
    <section class="story-section">
      <article class="article">
        {#each storySection as box, j}
          <div class="text-box">{ box.textContent }</div>
        {/each}
      </article>
    </section>
  {/each}
</div>

<script>
  import "intersection-observer"
  import scrollama from "scrollama"
  import { onMount } from 'svelte'
  import story from '../../story.js'

  let currentTextBoxContent = ''

  onMount(() => {
    const scroller = scrollama()
    scroller
      .setup({
        step: ".text-box"
      })
      .onStepEnter(response => {
        currentTextBoxContent = response.element.textContent
      })

    // setup resize event
    window.addEventListener("resize", scroller.resize);
  })
</script>

<style>
  .landing-section {
    min-height: 100vh;
    background-color: black;
  }

  .story-section {
    min-height: 100vh;
    background-color: gray;
    padding: 100vh 0;
  }

  .figure {
    position: sticky;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    border: 10px solid blue;
    background-color: gray;
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