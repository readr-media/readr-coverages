<section>
  <div
    class="character"
    style="left: 20px;"
  >
    <div
      id="tooltip-butterfly-mobile-1"
      class="tooltip tooltip-butterfly-mobile"
    >
      <div
        class="tooltip__image-wrapper image-wrapper"
      >
        <img
          class="image-wrapper__img"
          src="./characters/1.jpg"
          alt="photo"
        >
      </div>
      <div class="tooltip__info-wrapper">
        <p>
          張常美，女性，臺灣人，20 歲時因參加叛亂組織而被起訴，判刑 12 年
        </p>
      </div>
    </div>
    <img
      id="butterfly-mobile-character-1"
      class="butterfly"
      src="./butterfly.png"
      alt="butterfly"
    >
  </div>
  <div
    class="character"
    style="right: 20px; top: 250px"
  >
    <div
      id="tooltip-butterfly-mobile-2"
      class="tooltip tooltip-butterfly-mobile"
    >
      <div
        class="tooltip__image-wrapper image-wrapper"
      >
        <img
          class="image-wrapper__img"
          src="./characters/3.jpg"
          alt="photo"
        >
      </div>
      <div class="tooltip__info-wrapper">
        <p>
          劉秀明，男性，臺灣人，24 歲時因參加叛亂組織而被起訴，判刑 15 年
        </p>
      </div>
    </div>
    <img
      id="butterfly-mobile-character-2"
      class="butterfly"
      src="./butterfly.png"
      alt="butterfly"
    >
  </div>
  <div
    class="character"
    style="left: 20px; top: 500px"
  >
    <div
      id="tooltip-butterfly-mobile-3"
      class="tooltip tooltip-butterfly-mobile"
    >
      <div
        class="tooltip__image-wrapper image-wrapper"
      >
        <img
          class="image-wrapper__img"
          src="./characters/2.jpg"
          alt="photo"
        >
      </div>
      <div class="tooltip__info-wrapper">
        <p>
          高金郎，男性，臺灣人，24 歲時因共同陰謀投降叛徒而被起訴，判刑 15 年
        </p>
      </div>
    </div>
    <img
      id="butterfly-mobile-character-3"
      class="butterfly"
      src="./butterfly.png"
      alt="butterfly"
    >
  </div>
  <div
    class="character"
    style="right: 20px; top: 750px"
  >
    <div
      id="tooltip-butterfly-mobile-4"
      class="tooltip tooltip-butterfly-mobile"
    >
      <div
        class="tooltip__image-wrapper image-wrapper"
      >
        <img
          class="image-wrapper__img"
          src="./characters/4.jpg"
          alt="photo"
        >
      </div>
      <div class="tooltip__info-wrapper">
        <p>
          周賢農，男性，臺灣人，19 歲時因參加叛亂組織而被起訴，判刑 7 年
        </p>
      </div>
    </div>
    <img
      id="butterfly-mobile-character-4"
      class="butterfly"
      src="./butterfly.png"
      alt="butterfly"
    >
  </div>
</section>

<script>
  import { onMount } from 'svelte'

  onMount(() => {
    for (let i = 0; i < 4; i++) {
      gsap.to(`#tooltip-butterfly-mobile-${i + 1}`, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: `#butterfly-mobile-character-${i + 1}`
      })
    }
  })
</script>

<style>
  section {
    background-image: url('../explore-background.png');
    background-size: auto 100%;
    background-position: center;
    height: 100%;
    position: relative;
  }

  .character {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
  }

  .tooltip {
    flex-direction: column;
    width: 180px;
    padding: 12px 10px 10px 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: white;
    position: relative;
    bottom: 34px;
    z-index: 1000;
    opacity: 0;
    transform: translateY(50px);
  }
  .tooltip:before {
    position: absolute;
    bottom: -34px;
    left: calc(180px / 2 - 12px);
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 33px 12px 0 12px;
    border-color: rgba(0, 0, 0, 0.25) transparent transparent transparent;
  }
  .tooltip:after {
    position: absolute;
    bottom: -30px;
    left: calc(180px / 2 - 10px);
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 30px 10px 0 10px;
    border-color: #ffffff transparent transparent transparent;
  }
  .tooltip__image-wrapper {
    margin: 0 0 10px 0;
  }
  .tooltip__info-wrapper {
    display: flex;
    flex-direction: column;
    /*align-items: center;*/
    text-align: justify;
    line-height: 1.5;
    color: #4a4a4a;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-wrapper__img {
    width: 80px;
    height: 100px;
    object-fit: cover;
    filter: sepia(100%);
    opacity: 0.8;
  }

  .butterfly {
    height: 34px;
  }
</style>