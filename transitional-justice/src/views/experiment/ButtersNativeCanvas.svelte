<canvas id="canvas" width="1920" height="5000"></canvas>

<script>
  import { onMount } from 'svelte'
  import butterfly from '../../assets/butterfly.svg'

  onMount(() => {
    var canvas = document.getElementById('canvas');

    var ctx = canvas.getContext('2d');

    var image = new Image(50, 50)
    image.src = butterfly

    const degrees = 45
    for (let i = 0; i < 10700; i++) {
      // // save the unrotated context of the canvas so we can restore it later
      // // the alternative is to untranslate & unrotate after drawing
      // ctx.save();
      //
      // // move to the center of the canvas
      // // ctx.translate(Math.random() * 1000,Math.random() * 5000);
      //
      // // // rotate the canvas to the specified degrees
      // ctx.rotate(degrees*Math.PI/180);

      // draw the image
      // since the context is rotated, the image will be rotated also
      ctx.drawImage(image,(Math.random() * 1920),(Math.random() * 5000), 50, 50);
      //
      // // we’re done with the rotating so restore the unrotated context
      // ctx.restore();
    }
  })
</script>