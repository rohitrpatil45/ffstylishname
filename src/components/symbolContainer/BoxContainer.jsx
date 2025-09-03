import React from 'react'
import '../symbolContainer/boxcontainer.css'
import { symbols, emojis } from "../data/datafile";


function BoxContainer({heading , elements}) {
 const wordprinting = (word, index) =>{
console.log(word, index)
 }

  return (
    <div className='main-container-symols'>
        <p className='box-heading'>{heading}</p>
        <div className='boxx-container'>
          {elements.map((element , index) =>(
            <span onClick={() => {wordprinting(element,index)}} key={index} className='element'>{element}</span>
          ))}

        </div>

    </div>
  )
}

export default BoxContainer