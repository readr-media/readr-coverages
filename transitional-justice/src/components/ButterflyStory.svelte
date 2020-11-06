<section
  id="butterfly-wrapper"
  bind:this={butterflyWrapper}
  style="height: {appHeight}px"
>
  <div
    id="butterfly-scroll-trigger-wrapper"
    style="height: {appHeight}px"
  >
  </div>
</section>

<svelte:window
  bind:innerHeight={height}
/>

<script>
  export let chapter = '1'
  export let scene = '0'
  let datasets = {
    '1-0': {
      total: 1071,
      categoriesCount: [
        1027,
        44,
        0
      ]
    },
    '1-1': {
      total: 1071,
      categoriesCount: [
        1027,
        44,
        0
      ]
    },
    '1-2': {
      total: 1065,
      categoriesCount: [
        585,
        481,
        0
      ]
    },
    '1-3': {
      total: 918,
      categoriesCount: [
        388,
        0,
        0
      ]
    },
    '1-4': {
      total: 440,
      categoriesCount: [
        203,
        139,
        26
      ]
    },
    '1-5': {
      total: 440,
      categoriesCount: [
        203,
        139,
        26
      ]
    },
    '1-6': {
      total: 308,
      categoriesCount: [
        81,
        0,
        0
      ]
    },
    '1-7': {
      total: 308,
      categoriesCount: [
        77,
        39,
        0
      ]
    },
    '1-8': {
      total: 308,
      categoriesCount: [
        77,
        39,
        0
      ]
    },
    '1-9': {
      total: 308,
      categoriesCount: [
        77,
        39,
        0
      ]
    },
    '2-0': {
      total: 107,
      categoriesCount: [
        77,
        30,
        0
      ]
    },
    '2-1': {
      total: 107,
      categoriesCount: [
        77,
        30,
        0
      ]
    },
    '2-2': {
      total: 77,
      categoriesCount: [
        25,
        3,
        23
      ]
    },
    '2-3': {
      total: 25,
      categoriesCount: [
        11,
        0,
        0
      ]
    },
    '2-6': {
      total: 77,
      categoriesCount: [
        4,
        0,
        0
      ]
    },
    '2-9': {
      total: 1071,
      categoriesCount: [
        335,
        0,
        0
      ]
    },
    '2-10': {
      total: 18,
      categoriesCount: [
        9,
        0,
        0
      ]
    },
    '2-11': {
      total: 18,
      categoriesCount: [
        3,
        0,
        0
      ]
    },
    '2-12': {
      total: 18,
      categoriesCount: [
        3,
        0,
        0
      ]
    },
    '2-15': {
      total: 77,
      categoriesCount: [
        23,
        18,
        12
      ]
    },
    '2-16': {
      total: 77,
      categoriesCount: [
        23,
        18,
        12
      ]
    },
    '3-0': {
      total: 817,
      categoriesCount: [
        222,
        0,
        0
      ]
    },
    '3-1': {
      total: 817,
      categoriesCount: [
        222,
        0,
        0
      ]
    },
    '3-2': {
      total: 817,
      categoriesCount: [
        108,
        16,
        0
      ]
    },
  }

  let height

  let butterflyWrapper

  let appHeight
  $: appHeight = height * 0.6

  // Aliases
  let Application = PIXI.Application,
      Container = PIXI.Container,
      loader = PIXI.loader,
      resources = PIXI.loader.resources,
      TextureCache = PIXI.utils.TextureCache,
      Sprite = PIXI.Sprite;

  let app = new Application({
    backgroundColor: 0xffffff,
    // antialiasing: true,
    // transparent: false,
    // resolution: 1,
  });

  let previousChapterScene = ''
  let butterflies = []
  $: if (butterflyWrapper) {
    render()

    function render() {
      const story = `${chapter}-${scene}`
      let data = datasets[`${chapter}-${scene}`]
      const shouldSkip =
        (story === '1-1' && previousChapterScene === '1-0') ||
        (story === '1-0' && previousChapterScene === '1-1') ||
        (story === '1-5' && previousChapterScene === '1-4') ||
        (story === '1-4' && previousChapterScene === '1-5') ||
        (story === '1-8' && previousChapterScene === '1-7') ||
        (story === '1-7' && previousChapterScene === '1-8') ||
        (story === '1-9' && previousChapterScene === '1-8') ||
        (story === '1-8' && previousChapterScene === '1-9') ||
        (story === '2-1' && previousChapterScene === '2-0') ||
        (story === '2-0' && previousChapterScene === '2-1') ||
        (story === '2-16' && previousChapterScene === '2-15') ||
        (story === '2-15' && previousChapterScene === '2-16') ||
        (story === '3-1' && previousChapterScene === '3-0') ||
        (story === '3-0' && previousChapterScene === '3-1')
      previousChapterScene = `${chapter}-${scene}`
      if (shouldSkip || !data) {
        return
      }
      let dataForRendering = []
      dataForRendering = new Array(1071)
        .fill('empty')
        .fill('black', 0, data.total)
        .fill('yellow', 0, data.categoriesCount[0])
        .fill('blue', data.categoriesCount[0], data.categoriesCount[0] + data.categoriesCount[1])
        .fill('pink', data.categoriesCount[1], data.categoriesCount[1] + data.categoriesCount[2])

      dataForRendering = dataForRendering.reverse()

      app.stage.removeChildren()

      const textures = {
        empty: PIXI.Texture.from('./butterfly.png'),
        black: PIXI.Texture.from('./butterfly-black.png'),
        yellow: PIXI.Texture.from('./butterfly-yellow.png'),
        blue: PIXI.Texture.from('./butterfly-blue.png'),
        pink: PIXI.Texture.from('./butterfly-pink.png'),
      }
      // app = new Application({
      //   backgroundColor: 0xffffff,
      //   width: butterflyWrapper.getBoundingClientRect().width,
      //   height: appHeight,
      //   // antialiasing: true,
      //   // transparent: false,
      //   // resolution: 1,
      // });
      app.renderer.resize(butterflyWrapper.getBoundingClientRect().width, appHeight);
      app.renderer.view.style.position = 'absolute'
      app.renderer.view.style.top = `0px`
      app.renderer.view.style.left = '0px'
      app.renderer.view.style.display = 'block'
      app.stage.sortableChildren = true
      butterflyWrapper.appendChild(app.view)
      const container = new Container()
      app.stage.addChild(container)

      for (let dataIndex = 0; dataIndex < dataForRendering.length; dataIndex++) {
        const color = dataForRendering[dataIndex]
        const texture = textures[color]
        const butterfly = new PIXI.Sprite(texture)
        const randomY = Math.random()
        const scaleMin = 0.038
        const scaleMax = 0.068
        const scale = randomY * (scaleMax - scaleMin) + scaleMin
        butterfly.anchor.set(0.5)
        butterfly.scale.set(butterflies[dataIndex] ? butterflies[dataIndex].scale.x : scale)
        butterfly.x = butterflies[dataIndex] ? butterflies[dataIndex].x : Math.random() * (app.screen.width - 50) + 20
        butterfly.y = butterflies[dataIndex] ? butterflies[dataIndex].y : randomY * (appHeight - 22) + 10
        butterfly.rotation = butterflies[dataIndex] ? butterflies[dataIndex].rotation : Math.random()
        butterflies.push(butterfly)

        // const butterflyScrollTrigger = document.querySelector('#butterfly-scroll-trigger-wrapper').appendChild(document.createElement('DIV'))
        // butterflyScrollTrigger.style.position = 'absolute'
        // butterflyScrollTrigger.style.top = `${butterfly.y + (totalHeight / appsNumber * currentAppIndex)}px`
        // butterflyScrollTrigger.style.left = `${butterfly.x}px`
        // butterflyScrollTrigger.className = 'butterfly-scroll-trigger'
        // butterflyScrollTrigger.dataset.butterflyIndex = currentAppIndex * chuckSize + dataIndex

        // butterfly.transitional_justice_data = data[dataIndex]
        // butterfly.interactive = true
        // butterfly.buttonMode = true
        // butterfly
        //   .on('pointerover', function() {
        //     this.zIndex = 1
        //     // this.rotation += 0.5
        //     gsap.to(this, {
        //       duration: 1,
        //       rotation: this.rotation + 0.5
        //     })
        //     tooltipData = this.transitional_justice_data
        //     tooltipDisplay = 'flex'
        //     this.tint = 0xcccccc
        //   })
        //   .on('pointerout', function() {
        //     this.zIndex = 0
        //     // this.rotation -= 0.5
        //     gsap.to(this, {
        //       duration: 1,
        //       rotation: this.rotation - 0.5
        //     })
        //     tooltipData = {}
        //     tooltipDisplay = 'none'
        //     this.tint = 0xffffff
        //   })
        // butterflies.push(butterfly)
        container.addChild(butterfly)
      }
    }
  }

  // $: if ($partitionDataGender.length > 0) {
  //   const data = $partitionDataGender
  //   const chuckSize = Math.floor(data.length / appsNumber)
  //   const dataChunks = chunk(data, chuckSize)
  //   // Aliases
  //   let Application = PIXI.Application,
  //       Container = PIXI.Container,
  //       loader = PIXI.loader,
  //       resources = PIXI.loader.resources,
  //       TextureCache = PIXI.utils.TextureCache,
  //       Sprite = PIXI.Sprite;
  //
  //   const textureButterfuly = PIXI.Texture.from('./butterfly.png')
  //   // const textureButterfuly = PIXI.Texture.from('https://raw.githubusercontent.com/pixijs/examples/gh-pages/examples/assets/bunny.png')
  //
  //   for (let currentAppIndex = 0; currentAppIndex < appsNumber; currentAppIndex++) {
  //     const app = new Application({
  //       backgroundColor: 0xffffff,
  //       width: butterflyWrapper.getBoundingClientRect().width,
  //       height: totalHeight / appsNumber,
  //       // antialiasing: true,
  //       // transparent: false,
  //       // resolution: 1,
  //     });
  //     app.renderer.view.style.position = 'absolute'
  //     app.renderer.view.style.top = `${totalHeight / appsNumber * currentAppIndex}px`
  //     app.renderer.view.style.left = '0px'
  //     app.renderer.view.style.display = 'block'
  //     app.renderer.autoResize = true
  //     app.stage.sortableChildren = true
  //     butterflyWrapper.appendChild(app.view)
  //     const container = new Container()
  //     app.stage.addChild(container)
  //
  //     const dataChunk = dataChunks[currentAppIndex]
  //     for (let dataIndex = 0; dataIndex < dataChunk.length; dataIndex++) {
  //       const butterfly = new PIXI.Sprite(textureButterfuly)
  //       butterfly.anchor.set(0.5)
  //       butterfly.scale.set(0.05)
  //       butterfly.x = Math.random() * (app.screen.width - 50) + 20
  //       butterfly.y = Math.random() * (totalHeight / appsNumber - 22) + 10
  //       // butterfly.alpha = 0
  //       butterfly.rotation = Math.random()
  //
  //       // const butterflyScrollTrigger = document.querySelector('#butterfly-scroll-trigger-wrapper').appendChild(document.createElement('DIV'))
  //       // butterflyScrollTrigger.style.position = 'absolute'
  //       // butterflyScrollTrigger.style.top = `${butterfly.y + (totalHeight / appsNumber * currentAppIndex)}px`
  //       // butterflyScrollTrigger.style.left = `${butterfly.x}px`
  //       // butterflyScrollTrigger.className = 'butterfly-scroll-trigger'
  //       // butterflyScrollTrigger.dataset.butterflyIndex = currentAppIndex * chuckSize + dataIndex
  //
  //       butterfly.transitional_justice_data = dataChunk[dataIndex]
  //       butterfly.interactive = true
  //       butterfly.buttonMode = true
  //       butterfly
  //         .on('pointerover', function() {
  //           this.zIndex = 1
  //           // this.rotation += 0.5
  //           gsap.to(this, {
  //             duration: 1,
  //             rotation: this.rotation + 0.5
  //           })
  //           tooltipData = this.transitional_justice_data
  //           tooltipDisplay = 'flex'
  //           this.tint = 0xcccccc
  //         })
  //         .on('pointerout', function() {
  //           this.zIndex = 0
  //           // this.rotation -= 0.5
  //           gsap.to(this, {
  //             duration: 1,
  //             rotation: this.rotation - 0.5
  //           })
  //           tooltipData = {}
  //           tooltipDisplay = 'none'
  //           this.tint = 0xffffff
  //         })
  //       butterflies.push(butterfly)
  //       container.addChild(butterfly)
  //     }
  //   }
  //
  // // ScrollTrigger.batch('.butterfly-scroll-trigger', {
  // //   once: true,
  // //   batchMax: 1,
  // //   onEnter: batch => {
  // //     batch.forEach(trigger => {
  // //       const butterfly = butterflies[trigger.dataset.butterflyIndex]
  // //       gsap.to(butterfly, {
  // //         // x: butterfly.x - 50,
  // //         y: butterfly.y - 50,
  // //         alpha: 1,
  // //         duration: 0.1
  // //       })
  // //       gsap.to(butterfly.scale, {
  // //         x: 0.05,
  // //         y: 0.05,
  // //         duration: 0.1
  // //       })
  // //     })
  // //   }
  // // })
  // }
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
