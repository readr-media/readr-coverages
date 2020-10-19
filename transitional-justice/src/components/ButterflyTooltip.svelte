<div
  class="tooltip"
  style="
    display: {display};
    bottom: {y}px;
    left: {x}px;
  "
>
  {#if photoId}
    <div
      class="tooltip__image-wrapper image-wrapper"
    >
      <img
        class="image-wrapper__img"
        src={`./photo/${photoId}.jpg`}
        alt="photo"
      >
    </div>
  {/if}
  <div class="tooltip__info-wrapper">
    <p>
      <span>{nameProcessed}</span><span>{delimiter}</span><span>{gender}性</span><span></span>
    </p>
    <p>
      {#if age}<span>{age} 歲</span>{/if}{#if description}<span>時{description}</span>{/if}
    </p>
  </div>
</div>

<script>
  export let name = ''
  export let gender = ''
  export let age = ''
  export let description = ''
  const delimiter = '，'
  export let display = 'none'
  export let x = 0
  export let y = 0
  export let photoId = ''

  $: nameProcessed = mapName(name)

  function mapName(name = '') {
    const names = name.split('、')
    const result = names.map(function removePrefix(name) {
      return name.replace(/([A-Z|\d])+$/, '')
    }).join('、')
    return result
  }
</script>

<style>
  .tooltip {
    flex-direction: column;
    width: 180px;
    padding: 12px 10px 10px 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: white;
    position: fixed;
    z-index: 1000;
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
  }
</style>