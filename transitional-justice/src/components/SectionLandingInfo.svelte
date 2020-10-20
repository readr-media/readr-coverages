<div class="info">
<!--  <img-->
<!--    class="info__title-img"-->
<!--    src="title.svg"-->
<!--    alt="title"-->
<!--  >-->
  <picture>
    <source
      srcset="title-mobile.png"
      media="(max-width: 768px)"
    >
    <img
      class="info__title-img"
      src="title.svg"
      alt="title-decoration"
    >
  </picture>
  <img
    class="info__title-decoration-img"
    src="butterfly-line-02.svg"
    alt="title-decoration"
  >
  <h1 class="info__title">
    <p>從戒嚴時期受難者資料</p>
    <p>揭開白色恐怖的秘密</p>
  </h1>
  <div class="info__description">
    <p>1949 年，蔣介石政權撤退來臺，同年實施戒嚴令。短短 40 年間，上萬名平民因思想不正、涉嫌叛亂等原因交付軍法審判，輕則施予感化，重則判處死刑</p>
    <p>這些受難者是誰？為何被起訴？他們的命運因為軍事審判有了什麼變化？又有哪些人參與審判的決策？</p>
    <p>READr 分析促進轉型正義委員會設置的資料庫，試圖從超過一萬筆受難者的軍審過程中，找出白色恐怖統治之所以能高度體制化運作的原因。</p>
  </div>
</div>

<style>
  .info {
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .info__title-img {
    /*width: 400px;*/
    height: 162px;
    position: relative;
    left: -120px;
  }
  .info__title-decoration-img {
    position: absolute;
    /*width: 153px;*/
    height: 200px;
    left: -160px;
    top: 80px;
  }
  .info__title {
    font-size: 30px;
    line-height: 1.27;
    color: #4a4a4a;
    margin: 10px 0 0 0;
  }
  .info__description {
    font-size: 16px;
    line-height: 1.75;
    text-align: justify;
    margin: 24px 0 0 0;
  }
  .info__description p+p {
    margin: 24px 0 0 0;
  }
  
  @media (max-width: 767px) {
    .info {
      width: 100%;
      padding: 0 20px;
    }

    .info__title-img {
      /*height: 180px;*/
      /*left: -50px;*/
      width: 100%;
      height: auto;
      left: 0;
    }

    .info__title-decoration-img {
      display: none;
      /*height: 50px;*/
      /*left: 60px;*/
      /*top: -40px;*/
    }

    .info__title {
      font-size: 28px;
    }
  }
</style>