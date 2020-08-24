import React, { useState, useEffect } from 'react';
import './App.sass';

import SmoothScroll from 'smooth-scroll'
import Credit from './components/Credit'
import DialogFruitCube from './components/DialogFruitCube'
import DialogInteractive from './components/DialogInteractive'
import FruitCube from './components/FruitCube'
import FruitCubeContent from './components/FruitCubeContent'
import ReadingTest from './components/ReadingTest'

import content from './constant/content'

function App() {
  const [fruit, setFruit] = useState(undefined);
  
  const handleFruit = (fruit) => setFruit(fruit)

  useEffect(() => {
    new SmoothScroll('a[href*="#"]')
  });

  return (
    <div className="App f">
      <h1 className="f__title">{content.title}</h1>
      <p className="f__brief">{content.brief}</p>
      <section className="f__fruit-cube">
        <DialogFruitCube onClick={handleFruit} />
        <FruitCube onClick={handleFruit} />
        { fruit && <FruitCubeContent fruit={fruit} onClick={handleFruit} /> }
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
        <DialogInteractive>
          <h3>{content.interactive_1.heading}</h3>
          <p dangerouslySetInnerHTML={{__html: content.interactive_1.p_1}} />
          <p className="reference">{content.interactive_1.reference}</p>
        </DialogInteractive>
        <p>{content.article.p_12}</p>
        <p>{content.article.p_13}</p>
        <p>{content.article.p_14}</p>
        <picture>
          <img src={require(`./images/picture-1.jpg`)} alt={content.article.f_1}/>
          <figcaption>{content.article.f_1}</figcaption>
        </picture>
        
        <h2>{content.article.c_2}</h2>
        <p>{content.article.p_15}</p>
        <p>{content.article.p_16}</p>
        <p>{content.article.p_17}</p>
        <p>{content.article.p_18}</p>
        <picture>
          <img src={require(`./images/picture-2.jpg`)} alt={content.article.f_2} />
          <figcaption>{content.article.f_2}</figcaption>
        </picture>
        
        <h2>{content.article.c_3}</h2>
        <p>{content.article.p_19}</p>
        <picture>
          <img src={require(`./images/picture-3.jpg`)} alt={content.article.f_3} />
          <figcaption>{content.article.f_3}</figcaption>
        </picture>
        <p>{content.article.p_20}</p>
        <p>{content.article.p_21}</p>
        <p>{content.article.p_22}</p>
        <DialogInteractive>
          <h3>{content.interactive_2.heading}</h3>
          <p>{content.interactive_2.p_1}</p>
          <p dangerouslySetInnerHTML={{__html: content.interactive_2.p_2}} />
          <p className="reference">{content.interactive_2.reference}</p>
        </DialogInteractive>
        <p>{content.article.p_23}</p>
        <picture>
          <img src={require(`./images/picture-4.jpg`)} alt={content.article.f_4} />
          <figcaption>{content.article.f_4}</figcaption>
        </picture>
        
        <h2>{content.article.c_4}</h2>
        <p>{content.article.p_24}</p>
        <p>{content.article.p_25}</p>
        <picture>
          <img src={require(`./images/picture-5.jpg`)} alt={content.article.f_5} />
          <figcaption>{content.article.f_5}</figcaption>
        </picture>
        <p>{content.article.p_26}</p>
        <p>{content.article.p_27}</p>
       
        <h2>{content.article.c_5}</h2>
        <p>{content.article.p_28}</p>
        <h3>{content.article.chart_1.title}</h3>
        <picture>
          <source media="(min-width:768px)" srcSet={require(`./images/chart-1-desktop.png`)} type="image/png" />
          <img src={require(`./images/chart-1-mobile.png`)} alt={content.article.chart_1.caption} />
          <figcaption>{content.article.chart_1.caption}</figcaption>
        </picture>
        <p>{content.article.p_29}</p>
        <p>{content.article.p_30}</p>
        <DialogInteractive>
          <h3>{content.interactive_3.heading}</h3>
          <p dangerouslySetInnerHTML={{__html: content.interactive_3.p_1}} />
          <p className="reference">{content.interactive_3.reference}</p>
        </DialogInteractive>
        <p dangerouslySetInnerHTML={{__html: content.article.p_31}} />
        <p className="annotation">{content.article.annotation_2}</p>
        <h3>{content.article.chart_3.title}</h3>
        <picture>
          <source media="(min-width:768px)" srcSet={require(`./images/chart-3-desktop.png`)} type="image/png" />
          <img src={require(`./images/chart-3-mobile.png`)} alt={content.article.chart_3.caption} />
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
          <img src={require(`./images/picture-6.jpg`)} alt={content.article.f_6} />
          <figcaption>{content.article.f_6}</figcaption>
        </picture>
        <DialogInteractive>
          <h3>{content.interactive_4.heading}</h3>
          <img src={require(`./images/interactive.jpg`)} />
          <p>{content.interactive_4.p_1}</p>
          <p>{content.interactive_4.p_2}</p>
          <p className="reference">{content.interactive_4.reference}</p>
        </DialogInteractive>
        <p>{content.article.p_38}</p>
        <p>{content.article.p_39}</p>
        <p>{content.article.p_40}</p>
        <p>{content.article.p_41}</p>
        
        <h2>{content.article.c_7}</h2>
        <p>{content.article.p_42}</p>
        <h3>{content.article.chart_4.title}</h3>
        <picture>
          <source media="(min-width:768px)" srcSet={require(`./images/chart-4-desktop.png`)} type="image/png" />
          <img src={require(`./images/chart-4-mobile.png`)} alt={content.article.chart_4.caption} />
          <figcaption>{content.article.chart_4.caption}</figcaption>
        </picture>
        <p>{content.article.p_43}</p>
        <p>{content.article.p_44}</p>
        <p>{content.article.p_45}</p>
        <p>{content.article.p_46}</p>

        <h2>{content.article.c_8}</h2>
        <p>{content.article.p_47}</p>
        <p>{content.article.p_48}</p>
        <ReadingTest />
        <DialogInteractive>
          <h3>{content.interactive_6.heading}</h3>
          <ul>
            <li>{content.interactive_6.item_1}</li>
            <li dangerouslySetInnerHTML={{__html: content.interactive_6.item_2}} />
          </ul>
        </DialogInteractive>
      </article>
      <Credit />
    </div>
  )
}

export default App;
