import React from 'react';
import './DialogFruitCube.sass';

function DialogFruitCube(props) {
  return (
    <div id="fruit-cube-dialog" className="fruit-cube-dialog">
      <div className="fruit-cube-dialog__bg"/>
      <span>客人啊，我這裡的水果最新鮮！<br className="mobile-only" />
      下面種類任你選，<br />
      啊我推薦<button onClick={() => props.onClick('litchi')}>荔枝</button>，很划算喔！</span>
    </div>
  )
}

export default DialogFruitCube;