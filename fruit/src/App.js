import React from 'react';
import './App.sass';

import DialogFruitCube from './components/DialogFruitCube'
import FruitCube from './components/FruitCube'

import content from './constant/content'

function App() {
  return (
    <div className="App f">
      <h1 className="f__title">{content.title}</h1>
      <p className="f__brief">{content.brief}</p>
      <DialogFruitCube />
      <FruitCube />
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
        <p>{content.article.p_12}</p>
        <p>{content.article.p_13}</p>
        <p>{content.article.p_14}</p>
      </article>
    </div>
  )
}

export default App;
