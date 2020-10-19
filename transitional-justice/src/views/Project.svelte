<section class="app">
  <readr-header class="app__readr-header readr-header"></readr-header>
  <section class="app__main-section main-section">
    <SectionLanding class="main-section__section-landing" />
    <section class="main-section__explore-section explore-section">
      <Butterfly />
    </section>
  </section>
</section>

<script>
  import SectionLanding from "../components/SectionLanding.svelte"
  import Butterfly from '../components/Butterfly.svelte'
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
</style>