<section id="app">
  {#if view === 'center-constant-margin'}
    <CenterConstantMargin />
  {:else if view === 'skew-constant-margin'}
    <SkewConstantMargin />
  {:else if view === 'center-full-margin'}
    <CenterFullMargin />
  {:else if view === 'skew-full-margin'}
    <SkewFullMargin />
  {:else if view === 'center-no-margin'}
    <CenterNoMargin />
  {:else if view === 'skew-no-margin'}
    <SkewNoMargin />
  <!--{:else if view === 'phaser'}-->
  <!--  <PhaserPlayground />-->
  {:else if view === 'butters-native'}
    <ButtersNative />
  {:else if view === 'butters-native-canvas'}
    <ButtersNativeCanvas />
  {:else if view === 'butters-pixi-1'}
    <ButtersPixi />
  {:else if view === 'trans-full'}
    <ProjectExpTransitonFull />
  {:else if view === 'trans-text'}
    <ProjectExpTransitonTextBox />
  {:else if view === 'trans-mixed'}
    <ProjectExpTransitonMix />
  {:else}
    <Project />
  {/if}
</section>

<script>
  import CenterConstantMargin from './views/experiment/CenterConstantMargin.svelte'
  import SkewConstantMargin from './views/experiment/SkewConstantMargin.svelte'
  import CenterFullMargin from './views/experiment/CenterFullMargin.svelte'
  import SkewFullMargin from './views/experiment/SkewFullMargin.svelte'
  import CenterNoMargin from './views/experiment/CenterNoMargin.svelte'
  import SkewNoMargin from './views/experiment/SkewNoMargin.svelte'
  // import PhaserPlayground from './views/Phaser.svelte'
  import ButtersNative from './views/experiment/ButtersNative.svelte'
  import ButtersNativeCanvas from './views/experiment/ButtersNativeCanvas.svelte'
  import ButtersPixi from './views/ButtersPixi.svelte'

  import ProjectExpTransitonFull from './views/experiment/ProjectExpTransitonFull.svelte'
  import ProjectExpTransitonTextBox from "./views/experiment/ProjectExpTransitonTextBox.svelte";
  import ProjectExpTransitonMix from "./views/experiment/ProjectExpTransitonMix.svelte";
  import Project from './views/Project.svelte'

  const urlParams = new URLSearchParams(window.location.search)
  const view = urlParams.get('view')
</script>