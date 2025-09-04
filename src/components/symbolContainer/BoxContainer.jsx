import React from 'react'
import '../symbolContainer/boxcontainer.css'
import { symbols, emojis } from "../data/datafile";


function BoxContainer({ heading, elements, onSelect }) {
  const wordprinting = (word, index) => {
    console.log(word)

  }

  return (
    <div className='main-container-symols'>
      <p className='box-heading'>{heading}</p>
      <div className='boxx-container'>
        {elements.map((element, index) => (
          <span onClick={() => onSelect(element)} key={index} className='element'>{element}</span>
        ))}

      </div>

    </div>
  )
}

export default BoxContainer