import React, { useState } from "react";
import Message from "./Message";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
  return (
    <div className={isMorning ? "dayLight" : "box"}>
      <h1>Good {isMorning ? "Morning" : "Night"}</h1>

      <Message counter={count} />

      <br />

      <button className="buttonSize" onClick={() => setCount(0)}>
        Reset Counter
      </button>
      <button className="buttonSize" onClick={() => setCount(++count)}>
        Update Counter
      </button>

      <button className="buttonSize" onClick={() => setMorning(!isMorning)}>
        Change Colour
      </button>
    </div>
  );
}

export default App;
