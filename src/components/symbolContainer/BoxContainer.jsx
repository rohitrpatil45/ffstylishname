import React from 'react'
import '../symbolContainer/boxcontainer.css'
import { symbols, emojis } from "../data/datafile";
import { motion } from 'motion/react';


function BoxContainer({ heading, elements, onSelect }) {
  const wordprinting = (word, index) => {
    console.log(word)

  }

  return (
    <div className='main-container-symols'>
      <p className='box-heading'>{heading}</p>
      <div className='boxx-container'>
        {elements.map((element, index) => (
          <motion.span
          initial={{opacity:0}}
          animate={{opacity:1}}
          whileHover={{scale:1.5 , backgroundColor:'#3338A0'}}
            onClick={() => onSelect(element)} key={index} className='element'>
            {element}</motion.span>
        ))}

      </div>

    </div>
  )
}

export default BoxContainer