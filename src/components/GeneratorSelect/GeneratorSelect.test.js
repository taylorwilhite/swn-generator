import React from "react";
import ReactDOM from "react-dom";

import { GeneratorSelect } from ".";

it('renders without crashing', () => {
  const generators = ['one', 'two'];
  const div = document.createElement('div');
  ReactDOM.render(<GeneratorSelect generators={generators} />, div)
})