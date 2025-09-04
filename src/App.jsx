import React, { useState } from "react";
import { motion } from "motion/react";
import "../src/app.css";
import { symbols, emojis } from "../src/components/data/datafile";
import BoxContainer from "./components/symbolContainer/BoxContainer";
import Displayname from "./Displayname";
import InputTag from "./components/InputTag";

function App() {
  const [value, setValue] = useState(""); // Centralized state

  return (
    <div className="app-main-container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1, color: "#E62727" }}
        whileTap={{ scale: 0.9 }}
        transition={{
          color: { duration: 1, ease: "easeInOut" },
        }}
        className="heading"
      >
        Free Fire Name Generator
      </motion.h1>

      <div className="main-flex-container">
        <InputTag value={value} setValue={setValue} />
      </div>

      <div>
        <h3 className="semi-app-heading">Select Symbols & Emojis</h3>
        <div className="box-containerapp">
          <BoxContainer
            heading={"Symbols"}
            elements={symbols}
            onSelect={(el) => setValue(value + el)}
          />
          <BoxContainer
            heading={"Emojis"}
            elements={emojis}
            onSelect={(el) => setValue(value + el)}
          />
        </div>
      </div>

      <Displayname value={value} />
    </div>
  );
}

export default App;
