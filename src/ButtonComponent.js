import React from "react";
import {useState} from 'react';

function Button() {
  const [clicked, setClicked] = useState(true);
  const whenClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <button onClick={whenClicked}>
         { clicked ? "Click me" : "Thanks"}
      </button>
    </div>
  );
}
export default Button;


