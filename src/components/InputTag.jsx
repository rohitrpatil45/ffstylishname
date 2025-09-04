import React, { useState } from "react";
import '../components/input.css'
import { motion } from "motion/react";

function InputTag({ value, setValue }) {
  const handleClick = () => {
    console.log(value); // logs input value
    setValue(""); // clear input
  };

  return (
    <div className="input-container">
      <motion.input
        whileFocus={{ outline: 'dashed #eeeeeeff', scale: 1.3 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        placeholder="Enter Name"
        type="text"
        className="main-input-tag"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

    </div>
  );
}

export default InputTag;
