<section id="butterfly-wrapper">
  <ButterflyTooltip
    display={tooltipDisplay}
    y={y}
    x={x}
    name={tooltipData['姓名']}
    photoId={tooltipData['照片']}
    gender={tooltipData['性別']}
    age={tooltipData['被起訴時年齡']}
    description={tooltipData['理由']}
  />
</section>

<svelte:window
  on:mousemove={handleMouseMove}
  bind:innerHeight={height}
/>

<script>
  import ButterflyTooltip from './ButterflyTooltip.svelte'
  import loadData from '../loadData'

  // tooltip properties
  let tooltipData = {}
  let tooltipDisplay = 'none'
  let tooltipX = 0
  let tooltipY = 0
  let height
  $: y = height - tooltipY + 36
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
    app.renderer.view.style.position = 'absolute'
    app.renderer.view.style.display = 'block'
    app.renderer.autoResize = true
    app.renderer.resize(
      document.querySelector('.app').getBoundingClientRect().width,
      window.innerHeight * 10
    )

    app.stage.sortableChildren = true
    document.querySelector('#butterfly-wrapper').appendChild(app.view)

    PIXI.loader
      .add('butterfly', './butterfly.svg')
      .add('butterfly-yellow', './butterfly-yellow.svg')
      .load((loader, resources) => {
        for (let i = 0; i < data.length; i++) {
          // const gender = data[i]['性別']
          // const sprite = gender === '男' ? resources['butterfly'].texture : resources['butterfly-yellow'].texture
          const sprite = resources.butterfly.texture
          const butterfly = new PIXI.Sprite(sprite)

          butterfly.anchor.set(0.5)

          butterfly.scale.set(0.2)

          butterfly.x = Math.random() * (app.renderer.width - 50) + 20
          butterfly.y = Math.random() * (app.renderer.height - 180) + 100

          butterfly.rotation = Math.random()

          butterfly.transitional_justice_data = data[i]
          butterfly.interactive = true
          butterfly.buttonMode = true
          butterfly
            .on('pointerover', function() {
              this.zIndex = 1
              butterfly.rotation += 0.5
              tooltipData = this.transitional_justice_data
              tooltipDisplay = 'flex'
              this.tint = 0x4d4d4d
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
