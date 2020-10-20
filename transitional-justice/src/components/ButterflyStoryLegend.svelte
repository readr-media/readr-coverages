<div class="legend">
  <div class="legend__item">
    <img src="./butterfly-black.svg" alt="legend-butterfly">
    <span>&nbsp;=&nbsp;</span>
    <span>10 筆判決</span>
  </div>
  <div class="legend__item">
    <span class="category__indicator category__indicator--black"></span>
    <span class="category__description">
      <span>{categoryRuleName}</span>
      <span>：</span>
      <span>可辨識者 {totalCount} 筆</span>
    </span>
  </div>
  <div class="legend__item categories">
    {#each categories as category, i}
      <div class="categories__category category">
        <span class="category__indicator category__indicator--{i + 1}"></span>
        <span class="category__description">{category}</span>
      </div>
    {/each}
  </div>
</div>

<script>
  export let categoryRuleName = ''
  export let totalCount = 0
  export let categories = []
</script>

<style>
  .legend {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    color: #4a4a4a;
    line-height: 1.75;
    margin: 0 0 30px 0;
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    .legend {
      margin: 0 0 10px 0;
    }
  }

  .legend__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  
  img {
    height: 16px;
  }

  .category {
    display: flex;
    align-items: center;
  }
  .category + .category {
    margin: 0 0 0 18px;
  }
  @media (max-width: 768px) {
    .categories {
      margin: -2px 0 0 -2px;
    }
    .category {
      margin: 2px 0 0 2px !important;
      max-width: 100%;
      align-items: flex-start;
    }
    .category + .category {
      margin: 0;
    }
  }
  .category__indicator {
    display: inline-block;
    width: 16px;
    min-width: 16px;
    max-width: 16px;
    height: 16px;
    mix-height: 16px;
    max-height: 16px;
    border-radius: 100%;
    background-color: #4D4D4D;
  }
  .category__indicator--1 {
    background-color: #e0c950;
  }
  .category__indicator--2 {
    background-color: #4a90e2;
  }
  .category__indicator--3 {
    background-color: #89507B;
  }
  @media (max-width: 768px) {
    .category__indicator {
      margin: 7px 0 0 0;
    }
    .category__indicator--black {
      margin: 0;
    }
  }
  .category__description {
    margin: 0 0 0 5px;
  }
</style>