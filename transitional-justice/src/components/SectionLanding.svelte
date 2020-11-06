<section class="section-landing">
  <img
    class="section-landing__decoration"
    src="開頭大隻蝴蝶.png"
    alt="landing-decoration"
  >
  <SectionLandingInfo class="section-landing__info" />
</section>

<script>
  import SectionLandingInfo from './SectionLandingInfo.svelte'
</script>

<style>
  .section-landing {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;
  }
  .section-landing__decoration {
    position: absolute;
    right: calc(-776px / 2);
    top: 50px;
    height: 500px;
  }
  .section-landing__info {
    position: relative;
    left: -100px;
  }

  @media (max-width: 767px) {
    .section-landing {
      padding: 50px 0;
    }
    .section-landing__decoration {
      display: none;
      /*right: 0;*/
      /*top: 20px;*/
      /*left: 200px;*/
      /*height: 150px;*/
    }
  }
</style>