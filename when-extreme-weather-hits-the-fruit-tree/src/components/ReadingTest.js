import React, { useState } from 'react';
import './ReadingTest.sass';

import ReadingTestOption from './ReadingTestOption'
import content from '../constant/content'

function ReadingTest() {
  const [answer, setAnswer] = useState(undefined)
  const [showExplanation, setShowExplanation] = useState(false)
  
  const handleAnswer = (answer) => setAnswer(answer)

  const renderExplanation = () => {
    if (showExplanation) {
      return (
        <div className="reading-test__explanation">
          <h3>{ answer === 'longan' ? '答對了！' : '答錯了！' }</h3>
          <p>{content.interactive_5.explanation}</p>
        </div>
      )
    }
  }

  return (
    <div className="reading-test">
      <div className="reading-test__question">
        <h3 dangerouslySetInnerHTML={{__html: content.interactive_5.heading}} />
        <div className="reading-test__options">
          <ReadingTestOption fruit="litchi" onClick={handleAnswer} />
          <ReadingTestOption fruit="longan" onClick={handleAnswer} />
          <ReadingTestOption fruit="asian_plum" onClick={handleAnswer} />
          <ReadingTestOption fruit="mango" onClick={handleAnswer} />
        </div>
        <button onClick={() => setShowExplanation(true)}>{content.interactive_5.submit}</button>
      </div>
      { renderExplanation() }
    </div>
  )
}

export default ReadingTest;