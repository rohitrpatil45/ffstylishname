import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import "../src/app.css";
import { symbols, emojis } from "../src/components/data/datafile";
import BoxContainer from "./components/symbolContainer/BoxContainer";
import Displayname from "./Displayname";
import InputTag from "./components/InputTag";

function App() {
  const [value, setValue] = useState("");
  const cursorPosition = useRef(0); // Track cursor position

  const handleSymbolClick = (el) => {
    const pos = cursorPosition.current;
    const newValue = value.slice(0, pos) + el + value.slice(pos);
    setValue(newValue);
    cursorPosition.current = pos + el.length; // Update cursor position
  };

  return (
    <div className="app-main-container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1, color: "#E62727" }}
        whileTap={{ scale: 0.9 }}
        transition={{
          color: { duration: 1, ease: "easeInOut" },
          scale: { duration: 0.5 }
        }}
        className="heading"
      >
        Free Fire Name Generator
      </motion.h1>

      <div className="main-flex-container">
        <InputTag 
          value={value} 
          setValue={setValue}
          cursorPosition={cursorPosition}
        />
      </div>

      <div>
        <div className="centre-main">
          <motion.span
            initial={{opacity:0}}
            animate={{opacity:1}}
            whileHover={{scale:1.3}}
            className="semi-app-heading"
          >
            Select Symbols & Emojis
          </motion.span>
        </div>
        <div className="box-containerapp">
          <BoxContainer
            heading={"Symbols"}
            elements={symbols}
            onSelect={handleSymbolClick}
          />
          <BoxContainer
            heading={"Emojis"}
            elements={emojis}
            onSelect={handleSymbolClick}
          />
        </div>
      </div>

      <Displayname value={value} />
    </div>
  );
}

export default App;
