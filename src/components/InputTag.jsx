import React, { useState } from "react";
import '../components/input.css'

function InputTag({value ,setValue}) {
   const handleClick = () => {
    console.log(value); // logs input value
    setValue(""); // clear input
  };

  return (
    <div className="input-container">
      <input
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
