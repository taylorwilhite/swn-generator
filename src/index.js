import React, { useState } from "react";
import ReactDOM from "react-dom";

import { generateAdventure } from "../functions/generateAdventure";

import "./styles.css";

function App() {
  const [generated, setGenerated] = useState({ sitch: "", setup: "" });
  return (
    <div className="App">
      <h1>SWN GENERATOR</h1>
      <h2>{generated.sitch}</h2>
      <h2>{generated.setup}</h2>
      <button onClick={() => setGenerated(generateAdventure())}>
        Generate Adventure
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
