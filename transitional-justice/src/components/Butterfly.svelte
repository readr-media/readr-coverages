<section
  id="butterfly-wrapper"
  bind:this={butterflyWrapper}
  style="height: {totalHeight}px"
>
  <ButterflyTooltip
    display={tooltipDisplay}
    y={y}
    x={x}
    name={tooltipData['姓名']}
    photoId={tooltipData['照片']}
    bornLocation={tooltipData['籍貫']}
    gender={tooltipData['性別']}
    age={tooltipData['被起訴時年齡']}
    description={tooltipData['理由']}
    charge={tooltipData['刑度']}
  />
  <div
    id="butterfly-scroll-trigger-wrapper"
    style="height: {totalHeight}px"
  >
  </div>
</section>

<svelte:window
  on:mousemove={handleMouseMove}
  bind:innerHeight={height}
/>

<script>
  import chunk from 'lodash/chunk'
  import ButterflyTooltip from './ButterflyTooltip.svelte'
  // import { rawData } from '../store'
  import loadData from "../loadData"

  // tooltip properties
  let tooltipData = {}
  let tooltipDisplay = 'none'
  let tooltipX = 0
  let tooltipY = 0
  let height
  $: y = height - tooltipY + 46
  $: x = tooltipX - 180 / 2
  function handleMouseMove(e) {
    tooltipX = e.clientX;
		tooltipY = e.clientY;
  }


  let butterflyWrapper

  let totalHeight = 10000

  let appsNumber = 8
  let butterflies = []

  $: if (butterflyWrapper) {

    render()

    async function render() {
      let data = await loadData()
      // const data = $rawData
      const chuckSize = Math.floor(data.length / appsNumber)
      const dataChunks = chunk(data, chuckSize)
      // Aliases
      let Application = PIXI.Application,
          Container = PIXI.Container,
          loader = PIXI.loader,
          resources = PIXI.loader.resources,
          TextureCache = PIXI.utils.TextureCache,
          Sprite = PIXI.Sprite;

      const textureButterfuly = PIXI.Texture.from('./butterfly.png')
      // const textureButterfuly = PIXI.Texture.from('https://raw.githubusercontent.com/pixijs/examples/gh-pages/examples/assets/bunny.png')

      for (let currentAppIndex = 0; currentAppIndex < appsNumber; currentAppIndex++) {
        const app = new Application({
          backgroundColor: 0xffffff,
          width: butterflyWrapper.getBoundingClientRect().width,
          height: totalHeight / appsNumber,
          // antialiasing: true,
          // transparent: false,
          // resolution: 1,
        });
        app.renderer.view.style.position = 'absolute'
        app.renderer.view.style.top = `${totalHeight / appsNumber * currentAppIndex}px`
        app.renderer.view.style.left = '0px'
        app.renderer.view.style.display = 'block'
        app.renderer.autoResize = true
        app.stage.sortableChildren = true
        butterflyWrapper.appendChild(app.view)
        const container = new Container()
        app.stage.addChild(container)

        const dataChunk = dataChunks[currentAppIndex]
        for (let dataIndex = 0; dataIndex < dataChunk.length; dataIndex++) {
          const butterfly = new PIXI.Sprite(textureButterfuly)
          butterfly.anchor.set(0.5)
          butterfly.scale.set(0.05)
          butterfly.x = Math.random() * (app.screen.width - 50) + 20
          butterfly.y = Math.random() * (totalHeight / appsNumber - 22) + 10
          // butterfly.alpha = 0
          butterfly.rotation = Math.random()

          // const butterflyScrollTrigger = document.querySelector('#butterfly-scroll-trigger-wrapper').appendChild(document.createElement('DIV'))
          // butterflyScrollTrigger.style.position = 'absolute'
          // butterflyScrollTrigger.style.top = `${butterfly.y + (totalHeight / appsNumber * currentAppIndex)}px`
          // butterflyScrollTrigger.style.left = `${butterfly.x}px`
          // butterflyScrollTrigger.className = 'butterfly-scroll-trigger'
          // butterflyScrollTrigger.dataset.butterflyIndex = currentAppIndex * chuckSize + dataIndex

          butterfly.transitional_justice_data = dataChunk[dataIndex]
          butterfly.interactive = true
          butterfly.buttonMode = true
          butterfly
            .on('pointerover', function() {
              this.zIndex = 1
              // this.rotation += 0.5
              gsap.to(this, {
                duration: 1,
                rotation: this.rotation + 0.5
              })
              tooltipData = this.transitional_justice_data
              tooltipDisplay = 'flex'
              this.tint = 0xcccccc
            })
            .on('pointerout', function() {
              this.zIndex = 0
              // this.rotation -= 0.5
              gsap.to(this, {
                duration: 1,
                rotation: this.rotation - 0.5
              })
              tooltipData = {}
              tooltipDisplay = 'none'
              this.tint = 0xffffff
            })
          butterflies.push(butterfly)
          container.addChild(butterfly)
        }
      }

    // ScrollTrigger.batch('.butterfly-scroll-trigger', {
    //   once: true,
    //   batchMax: 1,
    //   onEnter: batch => {
    //     batch.forEach(trigger => {
    //       const butterfly = butterflies[trigger.dataset.butterflyIndex]
    //       gsap.to(butterfly, {
    //         // x: butterfly.x - 50,
    //         y: butterfly.y - 50,
    //         alpha: 1,
    //         duration: 0.1
    //       })
    //       gsap.to(butterfly.scale, {
    //         x: 0.05,
    //         y: 0.05,
    //         duration: 0.1
    //       })
    //     })
    //   }
    // })

    }
  // ScrollTrigger.batch('.butterfly-scroll-trigger', {
  //   once: true,
  //   batchMax: 1,
  //   onEnter: batch => {
  //     batch.forEach(trigger => {
  //       const butterfly = butterflies[trigger.dataset.butterflyIndex]
  //       gsap.to(butterfly, {
  //         // x: butterfly.x - 50,
  //         y: butterfly.y - 50,
  //         alpha: 1,
  //         duration: 0.1
  //       })
  //       gsap.to(butterfly.scale, {
  //         x: 0.05,
  //         y: 0.05,
  //         duration: 0.1
  //       })
  //     })
  //   }
  // })
  }
</script>

<style>
  #butterfly-wrapper {
    width: 100%;
    /*width: 1680px;*/
    position: relative;
  }
  #butterfly-scroll-trigger-wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
