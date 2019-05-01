import React, { useState } from "react";

import { Generators } from "../../constants/Generators";
import { GeneratorSelect } from "../GeneratorSelect";
import { generate } from "../../functions/generate";
import Button from '@material-ui/core/Button';

export const App = () => {
  const [generated, setGenerated] = useState("");
  const [generatorType, setGeneratorType] = useState({ type: 'Problem'});
  return (
    <div className="App">
      <h1>SWN GENERATOR</h1>
      <GeneratorSelect value={ generatorType.type } generators={ Generators } onChange={(e) => setGeneratorType({type: e.target.value})} />
      <h2>{generated}</h2>
      <Button variant="contained" color="primary" onClick={() => setGenerated(generate(generatorType.type))}>
        Generate { generatorType.type }
      </Button>
    </div>
  );
}