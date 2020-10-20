<section
  id="butterfly-wrapper"
  style="height: {butterflyWrapperHeight}"
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
<!--  <div-->
<!--    id="butterfly-scroll-trigger-wrapper"-->
<!--    style="height: {butterflyWrapperHeight}"-->
<!--  />-->
</section>

<svelte:window
  on:mousemove={handleMouseMove}
  bind:innerHeight={height}
/>

<script>
  import { tick } from 'svelte'
  import ButterflyTooltip from './ButterflyTooltip.svelte'
  import loadData from '../loadData'

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

  const colors = {
    gender: {
      '男': 0x4d4d4d,
      '女': 0xE0C950
    },
  }

  let butterflyWrapperHeight = '10000px'

  let app
  let butterflies = []

  async function main() {
    const data = await loadData()

    //Aliases
    let Application = PIXI.Application,
        Container = PIXI.Container,
        loader = PIXI.loader,
        resources = PIXI.loader.resources,
        TextureCache = PIXI.utils.TextureCache,
        Sprite = PIXI.Sprite;

    //Create a Pixi Application
    app = new Application({
      backgroundColor: 0xffffff,
      // width: document.querySelector('#butterfly-wrapper').getBoundingClientRect().width,
      // height: document.querySelector('#butterfly-wrapper').getBoundingClientRect().height,
      width: 1680,
      height: 10000,
      antialiasing: true,
      transparent: false,
      // resolution: 1,
    });
    // app.renderer.view.style.position = 'absolute'
    // app.renderer.view.style.display = 'block'
    // app.renderer.autoResize = true
    app.stage.sortableChildren = true
    document.querySelector('#butterfly-wrapper').appendChild(app.view)

    let state
    // let butterflies = []

    loader
      .add('butterfly', './butterfly.png')
      .add('butterfly-yellow', './butterfly-yellow.svg')
      .load(setup)

    function setup(loader, resources) {
      for (let i = 0; i < (1000 || data.length); i++) {
        // const gender = data[i]['性別']
        // const sprite = gender === '男' ? resources['butterfly'].texture : resources['butterfly-yellow'].texture
        const sprite = resources.butterfly.texture
        const butterfly = new PIXI.Sprite(sprite)

        butterfly.anchor.set(0.5)

        butterfly.scale.set(0.05)

        // butterfly.scale.x = 0.2
        // butterfly.scale.y = 0.2

        butterfly.x = Math.random() * (app.renderer.width - 50) + 20
        butterfly.y = Math.random() * (app.renderer.height - 180) + 100 + 50

        // const butterflyScrollTrigger = document.querySelector('#butterfly-scroll-trigger-wrapper').appendChild(document.createElement('DIV'))
        // butterflyScrollTrigger.style.position = 'absolute'
        // butterflyScrollTrigger.style.top = `${butterfly.y}px`
        // butterflyScrollTrigger.style.left = `${butterfly.x}px`
        // butterflyScrollTrigger.className = 'butterfly-scroll-trigger'
        // butterflyScrollTrigger.dataset.butterflyIndex = i

        butterfly.rotation = Math.random()

        // butterfly.alpha = 1

        butterfly.transitional_justice_data = data[i]
        butterfly.interactive = true
        butterfly.buttonMode = true
        butterfly
          .on('pointerover', function() {
            this.zIndex = 1
            butterfly.rotation += 0.5
            // gsap.to(butterfly, {
            //   duration: 1,
            //   rotation: butterfly.rotation + 0.5
            // })
            tooltipData = this.transitional_justice_data
            tooltipDisplay = 'flex'
            this.tint = 0xcccccc
          })
          .on('pointerout', function() {
            this.zIndex = 0
            butterfly.rotation -= 0.5
            // gsap.to(butterfly, {
            //   duration: 1,
            //   rotation: butterfly.rotation - 0.5
            // })
            tooltipData = {}
            tooltipDisplay = 'none'
            this.tint = 0xffffff
          })

        butterflies.push(butterfly)

        app.stage.addChild(butterfly)
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
      //         duration: 0.5
      //       })
      //       gsap.to(butterfly.scale, {
      //         x: 0.2,
      //         y: 0.2,
      //         duration: 0.5
      //       })
      //     })
      //   }
      // })

      //Set the game state
      // state = play;
      // state = function(){}

      //Start the game loop
      // app.ticker.add(delta => gameLoop(delta));
    }

    // function gameLoop(delta){
    //
    //   //Update the current game state:
    //   state(delta);
    // }
  }

  // async function playSceneGender(delta) {
  //   butterflyWrapperHeight = '100vh'
  //   await tick()
  //   app.renderer.resize(
  //     document.querySelector('#butterfly-wrapper').getBoundingClientRect().width,
  //     document.querySelector('#butterfly-wrapper').getBoundingClientRect().height,
  //   )
  //   butterflies.forEach(butterfly => {
  //     const y = Math.random()
  //     gsap.to(butterfly, {
  //       x: Math.random() * (app.renderer.width * 10 - 50) + 20,
  //       y: y * (app.renderer.height - 180) + 100,
  //       duration: 1,
  //       ease: 'power1',
  //     });
  //
  //     const min = 0.12
  //     const max = 0.25
  //     const scale = y * (max - min) + min
  //
  //     gsap.to(butterfly.scale, {
  //       x: scale,
  //       y: scale,
  //       duration: 1,
  //       ease: 'power1',
  //     })
  //   })
  // }

  main()
</script>

<style>
  #butterfly-wrapper {
    /*width: 100%;*/
    position: relative;
  }
  #butterfly-scroll-trigger-wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
