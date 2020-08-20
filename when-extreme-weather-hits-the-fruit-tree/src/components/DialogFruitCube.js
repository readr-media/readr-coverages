import React from 'react';
import './DialogFruitCube.sass';

function DialogFruitCube() {
  return (
    <div className="fruit-cube-dialog">
      <div className="fruit-cube-dialog__bg"/>
      <span>人客敖早！今天要買什麼？<br className="mobile-only" />下面水果隨便你選！<br />啊我推薦<a>荔枝</a>，很划算哦～</span>
    </div>
  )
}

export default DialogFruitCube;