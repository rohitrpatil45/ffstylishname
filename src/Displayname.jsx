import React from 'react'
import '../src/Displaycomponent.css'

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
        <h2 className='naming'>{value}</h2>
        <button onClick={copyfunction} className='copy-btn'>Copy</button>
      </div>
    </div>
  );
}

export default Displayname;
