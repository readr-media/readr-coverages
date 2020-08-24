import React from 'react';
import './ReadingTestOption.sass';

import content from '../constant/content'
import fruits from '../constant/fruits'

function ReadingTestOption(props) {
  return (
    <label className="option" onClick={() => props.onClick(props.fruit)}>
      <input type="radio" name="reading-test" value={props.fruit} />
      <img src={require(`../images/fruits/${props.fruit}.png`)} />
      <span className="mark" />
      {fruits[props.fruit]}
    </label>
  )
}

export default ReadingTestOption;