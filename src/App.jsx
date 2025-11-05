import React, { useState, useRef } from "react";
import './app.css'
import { motion } from "motion/react";
import InputTag from "./components/InputTag";
import BoxContainer from "./components/symbolContainer/BoxContainer";
import Displayname from "./Displayname";
import { symbols, emojis } from "../src/components/data/datafile";

function App() {
  const [value, setValue] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputRef = useRef(null);
  const handleSymbolClick = (el) => {
    const pos = cursorPosition;
    const newValue = value.slice(0, pos) + el + value.slice(pos);
    setValue(newValue);

    
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(pos + el.length, pos + el.length);
        inputRef.current.focus();
        // console.log(inputRef.current.setSelectionRange())
      }
    }, 0);

    setCursorPosition(pos + el.length);
  };

  return (
    <div className="app-main-container">
      <motion.h1 className="heading" >
        Free Fire Name Generator
      </motion.h1>

      <div className="main-flex-container">
        <InputTag
          value={value}
          setValue={setValue}
          inputRef={inputRef}
          setCursorPosition={setCursorPosition} 
        />
      </div>

      <div>
        <div className="centre-main">
          <motion.span className="semi-app-heading" >
            Select Symbols & Emojis
          </motion.span>
        </div>
        <div className="box-containerapp">
          <BoxContainer heading={"Symbols"} elements={symbols} onSelect={handleSymbolClick} />
          <BoxContainer heading={"Emojis"} elements={emojis} onSelect={handleSymbolClick} />
        </div>
      </div>

      <Displayname value={value} />
    </div>
  );
}

export default App;
