<div
  class="tooltip"
  style="
    display: {display};
    bottom: {y}px;
    left: {x}px;
  "
>
  <div class="tooltip__image-wrapper"></div>
  <div class="tooltip__info-wrapper">
    <p>
      <span>{name}</span><span>{delimiter}</span><span>{gender}性</span><span>{delimiter}</span>
    </p>
    <p>
      <span>{age} 歲時</span><span>{description}</span>
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
</script>

<style>
  .tooltip {
    flex-direction: column;
    width: 180px;
    padding: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: white;
    position: fixed;
    z-index: 1000;
  }
  .tooltip__info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 1.5;
    color: #4a4a4a;
  }
</style>