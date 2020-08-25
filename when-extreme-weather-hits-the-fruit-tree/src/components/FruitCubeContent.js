import React, { useState, useEffect } from 'react';
import './FruitCubeContent.sass';

import fruits from '../constant/fruits'
import content from '../constant/content'

const { fruit_cube } = content

function FruitCubeContent(props) {
  const fruitName = fruits[props.fruit]
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    setTimeout(() => setActive(true), 0)
  })

  return (
    <div id="fruit-cube-content" className={`fruit-cube-content cube ${isActive ? 'active' : ''}`}>
      <div className="cube__dialog">
        <div className="cube__compare">
          <p>你想買{fruits[props.fruit]}啊！<br />
          <span dangerouslySetInnerHTML={{ __html: fruit_cube[props.fruit].dialog }} /></p>
        </div>
        <div className="cube__compare-image">
          <div className="compare-item">
            <img src={require(`../images/fruits/${props.fruit}.png`)} alt={fruits[props.fruit]} />
            <span>
              {
                typeof fruit_cube[props.fruit].last_year === 'string'
                  ? fruit_cube[props.fruit].last_year
                  : `去年 ${fruit_cube[props.fruit].last_year} 斤`
              }
            </span>
          </div>
          <div className="compare-item">
            <img src={require(`../images/fruits/${props.fruit}.png`)} alt={fruits[props.fruit]} />
            <span>
              {
                typeof fruit_cube[props.fruit].this_year === 'string'
                  ? fruit_cube[props.fruit].this_year
                  : `今年 ${fruit_cube[props.fruit].this_year} 斤`
              }
            </span>
          </div>
        </div>
      </div>
      <div className="cube__chart">
        <h3>近十年{fruitName}產量與氣候變化的關係</h3>
        <picture>
          <source
            media="(min-width:768px)"
            srcSet={require(`../images/fruits-chart/chart-${props.fruit}-md.png`)}
            type="image/png"
          />
          <img
            src={require(`../images/fruits-chart/chart-${props.fruit}-sm.png`)}
            alt={`近十年${fruitName}產量與氣候變化的關係`}
          />
        </picture>
        <p dangerouslySetInnerHTML={{ __html: fruit_cube[props.fruit].chart }} />
      </div>
      <div className="cube__more">
        <p>
          要不要看看其他水果？<br className="mobile-only" />可以回水果攤
          <a href={ props.viewportWidth >= 1024 ? '#fruit-cube-dialog' : '#fruit-cube' }>繼續選購</a>
          {
            props.fruit !== 'litchi' &&
            <span>
              ，<br />
              或是參考我推薦的
              <a href="#fruit-cube-content" onClick={() => props.onClick('litchi')}>荔枝</a>，<br className="mobile-only" />
              很划算哦！
            </span>
          }
        </p>
      </div>
    </div>
  )
}

export default FruitCubeContent
