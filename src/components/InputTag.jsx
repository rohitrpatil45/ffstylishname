import React, { useState } from "react";
import '../components/input.css'

function InputTag() {
  const [value, Setvalue] = useState("");
  const inputValue = (e) => {
    console.log(value);
    Setvalue("");
  };
  return (
    <div className="input-container">
      <input
        placeholder="Enter Name"
        type="text"
        className="main-input-tag"
        value={value}
        onChange={(e) => {
          Setvalue(e.target.value);
        }}
      />
      <button className="enter-btn"
        onClick={() => {
          inputValue();
        }}
      >
        Enter
      </button>
    </div>
  );
}

export default InputTag;
