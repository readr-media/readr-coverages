import React from 'react';
import './DialogInteractive.sass';

function DialogInteractive(props) {
  return (
    <div className="dialog-interactive">
      {props.children}
    </div>
  )
}

export default DialogInteractive;
