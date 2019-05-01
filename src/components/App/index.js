import React, { useState } from "react";

import { Generators } from "../../constants/Generators";
import { GeneratorSelect } from "../GeneratorSelect";
import { generate } from "../../functions/generate";
import Button from '@material-ui/core/Button';
import {ReactComponent as GithubLogo} from '../../images/github-brands.svg';
import kofi from '../../images/Ko-fi_Icon_Blue.png';

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
      <div className="logos">
        <a href="https://github.com/taylorwilhite/swn-generator" target="_blank"><GithubLogo className="grayscale icon" /></a>
        <a href="https://ko-fi.com/tmoneybagels" target="_blank"><img className="grayscale icon" src={kofi} alt="Source Code"/></a>
      </div>
    </div>
  );
}