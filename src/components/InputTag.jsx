import React from "react";
import './input.css'
import { motion } from "motion/react";

function InputTag({ value, setValue, inputRef, setCursorPosition }) {
  const handleChange = (e) => {
    setValue(e.target.value);
    setCursorPosition(e.target.selectionStart);
  };

  const handleSelect = (e) => {
    setCursorPosition(e.target.selectionStart);
  };

  return (
    <div className="input-container">
      <motion.input
        ref={inputRef}
        transition={{ type: "spring", stiffness: 300 }}
        placeholder="Enter Your Name"
        type="text"
        className="main-input-tag"
        value={value}
        onChange={handleChange}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default InputTag;


// import React, { useState, useRef } from "react";
// import '../components/input.css'
// import { motion } from "motion/react";

// function InputTag({ value, setValue, inputRef, setCursorPosition }) {
//   const handleChange = (e) => {
//     setValue(e.target.value);
//     setValue(e.target.selectionStart);
//   };

//   const handleSelect = (e) => {
//     setCursorPosition(e);
//   };


//   return (
//     <div className="input-container">
//       <motion.input
//         // whileFocus={{ outline: 'dashed #eeeeeeff', scale: 1.3 }}
//         // whileHover={{ scale: 1.1 }}
//         transition={{ type: "spring", stiffness: 300 }}
//         placeholder="Enter Your Name"
//         type="text"
//         className="main-input-tag"
//         value={value}
//         ref={inputRef}
//         onChange={handleChange}
//         onSelect={handleSelect}
//       />

//     </div>
//   );
// }

// export default InputTag;
