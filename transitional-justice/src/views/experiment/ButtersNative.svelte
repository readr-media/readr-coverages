<section>
{#each Array(10710) as _, i}
    <img style="top: {Math.random() * 5000}px; left: {Math.random() * 1920}px;" src="./butterfly.svg" alt="">
{/each}
</section>



<style>
  section {
    width: 100vw;
    height: 5000px;
    position: relative;
  }
  img {
    position: absolute;
    width: 50px;
    height: 50px;
    /*border: 1px solid red;*/
  }
</style>