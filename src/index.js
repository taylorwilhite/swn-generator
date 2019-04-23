import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Generators } from "./constants/Generators";
import { GeneratorSelect } from "./components/GeneratorSelect";
import { generateAdventure } from "./functions/generateAdventure";
import { generateNPC } from "./functions/generateNPC";
import { generate } from "./functions/generate";

import "./styles.css";

function App() {
  const [generated, setGenerated] = useState({ sitch: "", setup: "" });
  const [generatorType, setGeneratorType] = useState({ type: 'Adventure'});
  return (
    <div className="App">
      <h1>SWN GENERATOR</h1>
      <GeneratorSelect generators={ Generators } onChange={(e) => setGeneratorType({type: e.target.value})} />
      <h2>{generated.sitch}</h2>
      <h2>{generated.setup}</h2>
      <button onClick={() => setGenerated(generate(generatorType.type))}>
        Generate { generatorType.type }
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
