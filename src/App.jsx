import React from "react";
import { motion } from "motion/react";
import "../src/app.css";
import { symbols, emojis } from "../src/components/data/datafile";
import BoxContainer from "./components/symbolContainer/BoxContainer";

import InputTag from "./components/InputTag";

function App() {
  return (
    <div className="app-main-container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1, color: "#E62727" }}
        whileTap={{ scale: 0.9 }}
        transition={{
          color: { duration: 0.5, ease: "easeInOut" },
        }}
        className="heading"
      >
        Free Fire Name Generator
      </motion.h1>
      <div className="main-flex-container">
        <InputTag />
      </div>
      <div>
        <h3 className="semi-app-heading">Select Symbols & Emojis</h3>
        <div className="box-containerapp">
          <BoxContainer heading={"Symbols"} elements={symbols} />
          <BoxContainer heading={"Emojis"} elements={emojis} />
        </div>
      </div>
    </div>
  );
}

export default App;
