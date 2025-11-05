import React, { useState } from 'react'
import '../src/displaycomponent.css'
import { motion } from 'motion/react';

function Displayname({ value }) {
  const [copied, setCopied] = useState(false);
  const [animating, setAnimating] = useState(false);

  const copyfunction = async () => {
    if (!value) return;
    
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setAnimating(true);
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
        setAnimating(false);
      }, 2000);
      
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopied(true);
      setAnimating(true);
      setTimeout(() => {
        setCopied(false);
        setAnimating(false);
      }, 2000);
    }
  };

  const getButtonClass = () => {
    let className = 'copy-btn';
    if (copied) className += ' copied';
    if (animating) className += ' animating';
    return className;
  };

  return (
    <div className='displaynameContainer'>
      <div className="innerdiv">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className='naming'
        >
          {value || 'Your generated name will appear here...'}
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyfunction} 
          className={getButtonClass()}
          disabled={!value}
        >
          {copied ? 'Copied!' : 'Copy'}
        </motion.button>
      </div>
    </div>
  );
}

export default Displayname;