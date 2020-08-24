import React from 'react';
import './FruitCube.sass';

import fruits from '../constant/fruits'

const FRUITS_LIST = Object.keys(fruits)

class FruitCube extends React.Component {
  constructor() {
    super();
    this.state = {
      isMarqueeMode: false
    }
  }

  componentDidMount() {
    this.checkMarqueeMode()
    window.addEventListener('resize', () => {
      this.checkMarqueeMode()
    })
  }

  checkMarqueeMode() {
    const viewportWidth = window.innerWidth 
      || document.documentElement.clientWidth 
      || document.body.clientWidth
    if (viewportWidth >= 1024) {
      this.setState({ isMarqueeMode: true })
    } else {
      this.setState({ isMarqueeMode: false })
    }
  }

  renderFruitList(prefix) {
    return (
      FRUITS_LIST.map((fruit) => (
        <a href="#fruit-cube-content" key={`${prefix}-${fruit}`} className="fruit-item" onClick={() => this.props.onClick(fruit)}>
          <picture>
            <img src={require(`../images/fruits/${fruit}.png`)} alt={fruits[fruit]} />
          </picture>
          <span>{fruits[fruit]}</span>
        </a>
      ))
    )
  }

  render() {
    return (
      <div id="fruit-cube" className="fruit-cube">
        <div className="fruit-cube-container">
          { this.renderFruitList('first') }
          { this.state.isMarqueeMode ? this.renderFruitList('second') : null }
        </div>
      </div>
    )
  }
}

export default FruitCube;
