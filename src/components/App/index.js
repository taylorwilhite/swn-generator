import React, { useState } from "react";

import { Generators } from "../../constants/Generators";
import { GeneratorSelect } from "../GeneratorSelect";
import { generate } from "../../functions/generate";
import Button from '@material-ui/core/Button';

export const App = () => {
  const [generated, setGenerated] = useState({ sitch: "", setup: "" });
  const [generatorType, setGeneratorType] = useState({ type: 'Adventure'});
  return (
    <div className="App">
      <h1>SWN GENERATOR</h1>
      <GeneratorSelect value={ generatorType.type } generators={ Generators } onChange={(e) => setGeneratorType({type: e.target.value})} />
      <h2>{generated.sitch}</h2>
      <h2>{generated.setup}</h2>
      <Button variant="contained" color="primary" onClick={() => setGenerated(generate(generatorType.type))}>
        Generate { generatorType.type }
      </Button>
    </div>
  );
}