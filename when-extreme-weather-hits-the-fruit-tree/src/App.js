import React, { Suspense, lazy, useState, useEffect } from 'react';
import './App.sass';

import SmoothScroll from 'smooth-scroll'
import FruitCubeContent from './components/FruitCubeContent'

import content from './constant/content'

const ContentSwiper = lazy(() => import('./components/ContentSwiper'))
const Credit = lazy(() => import('./components/Credit'))
const DialogFruitCube = lazy(() => import('./components/DialogFruitCube'))
const DialogInteractive = lazy(() => import('./components/DialogInteractive'))
const FruitCube = lazy(() => import('./components/FruitCube'))
const Header = lazy(() => import('./components/Header'))
const ReadingTest = lazy(() => import('./components/ReadingTest'))

function App() {
  const [fruit, setFruit] = useState(undefined)
  const [viewportWidth, setViewportWidth] = useState(0)
  
  const handleFruit = (fruit) => setFruit(fruit)

  const detectViewportWidth = () => {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  }

  const renderLoader = () => (<div>Loading...</div>)

  useEffect(() => {
    new SmoothScroll('a[href*="#"]')
    setViewportWidth(detectViewportWidth())
  }, []);

  return (
    <div className="App f">
      <div className="f__curtain" />
      <Suspense fallback={renderLoader()}>
        <Header />
      </Suspense>

      <h1 className="f__title" dangerouslySetInnerHTML={{__html: content.title}}></h1>
      <p
        className="f__brief"
        dangerouslySetInnerHTML={{__html: content.brief}}
      />
      <section className="f__fruit-cube">
        <Suspense fallback={renderLoader()}>
          <DialogFruitCube>
            <span>客人啊，我這裡的水果最新鮮！<br className="mobile-only" />
            下面種類任你選，<br />
            啊我推薦<a href="#fruit-cube-content" onClick={() => handleFruit('litchi')}>荔枝</a>，很划算喔！</span>
          </DialogFruitCube>
          <FruitCube onClick={handleFruit} />
        </Suspense>
        { fruit && <FruitCubeContent fruit={fruit} viewportWidth={viewportWidth} onClick={handleFruit} /> }
      </section>
      <article className="f__article">
        <p>{content.article.p_1}</p>
        <p>{content.article.p_2}</p>
        <p>{content.article.p_3}</p>
        <p>{content.article.p_4}</p>
        <p dangerouslySetInnerHTML={{__html: content.article.p_5}} />
        <p className="annotation">{content.article.annotation_1}</p>
        <p>{content.article.p_6}</p>
        <p>{content.article.p_7}</p>
        <p>{content.article.p_8}</p>
        <p>{content.article.p_9}</p>
        
        <h2>{content.article.c_1}</h2>
        <p>{content.article.p_10}</p>
        <p>{content.article.p_11}</p>
        <Suspense fallback={renderLoader()}>
          <DialogInteractive>
            <h3>{content.interactive_1.heading}</h3>
            <p dangerouslySetInnerHTML={{__html: content.interactive_1.p_1}} />
            <p className="reference">{content.interactive_1.reference}</p>
          </DialogInteractive>
        </Suspense>
        <p>{content.article.p_12}</p>
        <p>{content.article.p_13}</p>
        <p>{content.article.p_14}</p>
        <picture>
          <source srcSet={require('./images/picture-1.avif')} type="image/avif" />
          <source srcSet={require('./images/picture-1.webp')} type="image/webp" />
          <img src={require('./images/picture-1.jpg')} alt={content.article.f_1}/>
          <figcaption>{content.article.f_1}</figcaption>
        </picture>
        
        <h2>{content.article.c_2}</h2>
        <p>{content.article.p_15}</p>
        <p>{content.article.p_16}</p>
        <p>{content.article.p_17}</p>
        <p>{content.article.p_18}</p>
        <picture>
          <source srcSet={require('./images/picture-2.avif')} type="image/avif" />
          <source srcSet={require('./images/picture-2.webp')} type="image/webp" />
          <img src={require('./images/picture-2.jpg')} alt={content.article.f_2}/>
          <figcaption>{content.article.f_2}</figcaption>
        </picture>
        
        <h2>{content.article.c_3}</h2>
        <p>{content.article.p_19}</p>
        <picture>
          <source srcSet={require('./images/picture-3.avif')} type="image/avif" />
          <source srcSet={require('./images/picture-3.webp')} type="image/webp" />
          <img src={require('./images/picture-3.jpg')} alt={content.article.f_3}/>
          <figcaption>{content.article.f_3}</figcaption>
        </picture>
        <p>{content.article.p_20}</p>
        <p>{content.article.p_21}</p>
        <p>{content.article.p_22}</p>
        <Suspense fallback={renderLoader()}>
          <DialogInteractive>
            <h3>{content.interactive_2.heading}</h3>
            <p>{content.interactive_2.p_1}</p>
            <p dangerouslySetInnerHTML={{__html: content.interactive_2.p_2}} />
            <p className="reference">{content.interactive_2.reference}</p>
          </DialogInteractive>
        </Suspense>
        <p>{content.article.p_23}</p>
        <picture>
          <source srcSet={require('./images/picture-4.avif')} type="image/avif" />
          <source srcSet={require('./images/picture-4.webp')} type="image/webp" />
          <img src={require('./images/picture-4.jpg')} alt={content.article.f_4}/>
          <figcaption>{content.article.f_4}</figcaption>
        </picture>
        
        <h2>{content.article.c_4}</h2>
        <p>{content.article.p_24}</p>
        <p>{content.article.p_25}</p>
        <picture>
          <source srcSet={require('./images/picture-5.avif')} type="image/avif" />
          <source srcSet={require('./images/picture-5.webp')} type="image/webp" />
          <img src={require('./images/picture-5.jpg')} alt={content.article.f_5}/>
          <figcaption>{content.article.f_5}</figcaption>
        </picture>
        <p>{content.article.p_26}</p>
        <p>{content.article.p_27}</p>
       
        <h2>{content.article.c_5}</h2>
        <p>{content.article.p_28}</p>
        <h3>{content.article.chart_1.title}</h3>
        <picture>
          <source media="(min-width:768px)" srcSet={require(`./images/chart-1-md.png`)} type="image/png" />
          <img src={require(`./images/chart-1-sm.png`)} alt={content.article.chart_1.caption} />
          <figcaption>{content.article.chart_1.caption}</figcaption>
        </picture>
        <p>{content.article.p_29}</p>
        <Suspense fallback={renderLoader()}>
          <ContentSwiper />
        </Suspense>
        <p>{content.article.p_30}</p>
        <Suspense fallback={renderLoader()}>
          <DialogInteractive>
            <h3>{content.interactive_3.heading}</h3>
            <p dangerouslySetInnerHTML={{__html: content.interactive_3.p_1}} />
            <p className="reference">{content.interactive_3.reference}</p>
          </DialogInteractive>
        </Suspense>
        <p dangerouslySetInnerHTML={{__html: content.article.p_31}} />
        <p className="annotation">{content.article.annotation_2}</p>
        <h3>{content.article.chart_3.title}</h3>
        <picture>
          <source media="(min-width:768px)" srcSet={require(`./images/chart-3-md.png`)} type="image/png" />
          <img src={require(`./images/chart-3-sm.png`)} alt={content.article.chart_3.caption} />
          <figcaption>{content.article.chart_3.caption}</figcaption>
        </picture>
        <p dangerouslySetInnerHTML={{__html: content.article.p_32}} />
        <p>{content.article.p_33}</p>

        <h2>{content.article.c_6}</h2>
        <p>{content.article.p_34}</p>
        <p>{content.article.p_35}</p>
        <p>{content.article.p_36}</p>
        <p>{content.article.p_37}</p>
        <picture>
          <source srcSet={require('./images/picture-6.avif')} type="image/avif" />
          <source srcSet={require('./images/picture-6.webp')} type="image/webp" />
          <img src={require('./images/picture-6.jpg')} alt={content.article.f_6}/>
          <figcaption>{content.article.f_6}</figcaption>
        </picture>
        <Suspense fallback={renderLoader()}>
          <DialogInteractive>
            <h3>{content.interactive_4.heading}</h3>
            <img src={require(`./images/interactive.jpg`)} alt={content.interactive_4.p_1} />
            <p>{content.interactive_4.p_1}</p>
            <p>{content.interactive_4.p_2}</p>
            <p className="reference">{content.interactive_4.reference}</p>
          </DialogInteractive>
        </Suspense>
        <p>{content.article.p_38}</p>
        <p>{content.article.p_39}</p>
        <p>{content.article.p_40}</p>
        <p>{content.article.p_41}</p>
        
        <h2>{content.article.c_7}</h2>
        <p>{content.article.p_42}</p>
        <h3>{content.article.chart_4.title}</h3>
        <picture>
          <source media="(min-width:768px)" srcSet={require(`./images/chart-4-md.png`)} type="image/png" />
          <img src={require(`./images/chart-4-sm.png`)} alt={content.article.chart_4.caption} />
          <figcaption>{content.article.chart_4.caption}</figcaption>
        </picture>
        <p>{content.article.p_43}</p>
        <p>{content.article.p_44}</p>
        <p>{content.article.p_45}</p>
        <p>{content.article.p_46}</p>

        <h2>{content.article.c_8}</h2>
        <p>{content.article.p_47}</p>
        <p>{content.article.p_48}</p>
        <Suspense fallback={renderLoader()}>
          <ReadingTest />
          <DialogInteractive>
            <h3>{content.interactive_6.heading}</h3>
            <ul>
              <li>{content.interactive_6.item_1}</li>
              <li dangerouslySetInnerHTML={{__html: content.interactive_6.item_2}} />
            </ul>
          </DialogInteractive>
        </Suspense>
      </article>
      <Suspense fallback={renderLoader()}>
        <Credit />
      </Suspense>
      <footer className="f__footer">
        <Suspense fallback={renderLoader()}>
          <DialogFruitCube>
            <p>
              覺得這篇報導不錯嗎？<br/>
              歡迎
              <a
                href="https://www.readr.tw/donate"
                target="_blank"
                rel="noopener noreferrer"
              >
                贊助 READr
              </a><br className="mobile-only" />
              ，或繼續瀏覽下方最新專題
            </p>
          </DialogFruitCube>
        </Suspense>
      </footer>
    </div>
  )
}

export default App;
