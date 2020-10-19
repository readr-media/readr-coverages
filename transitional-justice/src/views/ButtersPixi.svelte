<ButterflyTooltip
  display={tooltipDisplay}
  y={y}
  x={x}
  name={tooltipData['姓名']}
  gender={tooltipData['性別']}
  age={tooltipData['被起訴時年齡']}
  description={tooltipData['理由']}
/>

<svelte:window
  on:mousemove={handleMouseMove}
  bind:innerHeight={height}
/>

<script>
  import ButterflyTooltip from '../components/ButterflyTooltip.svelte'
  import loadData from '../loadData'

  let tooltipData = {}
  let tooltipDisplay = 'flex'
  let tooltipX = 0
  let tooltipY = 0
  let height
  $: y = height - tooltipY + 20
  $: x = tooltipX - 180 / 2
  function handleMouseMove(e) {
    tooltipX = e.clientX;
		tooltipY = e.clientY;
  }

  const colors = {
    gender: {
      '男': 0x4d4d4d,
      '女': 0xE0C950
    },
  }

  async function main() {
    const data = await loadData()
    
    const app = new PIXI.Application({ backgroundColor: 0xffffff })
    // app.renderer.view.style.position = "absolute";
    // app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight * 10);

    app.stage.sortableChildren = true
    document.body.appendChild(app.view)
    
    PIXI.loader
      .add('butterfly', './butterfly.svg')
      .add('butterfly-yellow', './butterfly-yellow.svg')
      .load((loader, resources) => {
        for (let i = 0; i < 10700; i++) {
          const gender = data[i]['性別']
          const sprite = gender === '男' ? resources['butterfly'].texture : resources['butterfly-yellow'].texture
          const butterfly = new PIXI.Sprite(sprite)

          butterfly.anchor.x = 0.5;
          butterfly.anchor.y = 0.5;

          const max = 0.3
          const min = 0.1
          const randomY = Math.random()

          butterfly.scale.set(randomY * (max - min) + min)

          butterfly.x = Math.random() * (app.renderer.width - 100) + 25
          butterfly.y = randomY * (app.renderer.height - 100) + 25

          butterfly.rotation = Math.random()

          butterfly.transitional_justice_data = data[i]
          butterfly.interactive = true
          butterfly
            .on('pointerover', function() {
              this.zIndex = 1
              butterfly.rotation += 0.5
              tooltipData = this.transitional_justice_data
              tooltipDisplay = 'flex'
              this.tint = 0xffc0cb
            })
            .on('pointerout', function() {
              this.zIndex = 0
              butterfly.rotation -= 0.5
              tooltipData = {}
              tooltipDisplay = 'none'
              this.tint = 0xffffff
            })

          app.stage.addChild(butterfly)
        }
      })
  }

  main()
</script>

<style></style>
