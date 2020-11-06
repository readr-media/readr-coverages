<div class="monument">
  <h1>{ names.length } 名受難者</h1>
  <ul class="monument__list list">
    {#each names as name}
      <li class="list-item">
        {#each name as char}
          <span>{char}</span>
        {/each}
      </li>
    {/each}
  </ul>
</div>

<script>
  import loadData from '../loadData'

  let names = []
  main()

  async function main() {
    const data = await loadData()
    names = data.map(d => mapName(d['姓名']))

    function mapName(name = '') {
      const names = name.split('、')
      const result = names.map(function removePrefix(name) {
        return name.replace(/([A-Z|\d])+$/, '')
      })[0]
      return result
    }
  }
</script>

<style>
  .monument {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }

  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: -10px 0 0 -20px;
  }

  .list-item {
    font-size: 14px;
    color: #4a4a4a;
    margin: 20px 0 0 20px;
    min-width: 42px;
    text-align: justify;
    display: flex;
    justify-content: space-between;
  }
</style>