import React from 'react';
import './DialogFruitCube.sass';

function DialogFruitCube(props) {
  return (
    <div id="fruit-cube-dialog" className="fruit-cube-dialog">
      <div className="fruit-cube-dialog__bg"/>
      {props.children}
    </div>
  )
}

export default DialogFruitCube;