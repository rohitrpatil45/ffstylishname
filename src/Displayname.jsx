import React from 'react'
import '../src/displaycomponent.css'
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 , borderRadius:2 }}
          whileHover={{scale:1.3}}
          transition={{ }}
          className='naming'
        >{value}</motion.h2>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          onClick={copyfunction} className='copy-btn'
        >Copy</motion.button>
      </div>
    </div>
  );
}

export default Displayname;
