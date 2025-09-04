import React from 'react'
import '../src/Displaycomponent.css'
import { motion } from 'motion/react';

function Displayname({ value }) {

  const copyfunction = () => {
    const finalText = value;   // only value, no undefined
    navigator.clipboard.writeText(finalText)
      .then(() => {
        alert("✅ Copied: " + finalText);
      })
      .catch(() => {
        alert("❌ Failed to copy");
      });
  };

  return (
    <div className='displaynameContainer'>
      <div className="innerdiv">
        <motion.h2
        initial={{opacity:0 , y: 50}}
        animate={{opacity:1 , y:0}}
        transition={{duration:1, ease:"easeInOut"}}
          className='naming'
        >{value}</motion.h2>
        <button onClick={copyfunction} className='copy-btn'>Copy</button>
      </div>
    </div>
  );
}

export default Displayname;
