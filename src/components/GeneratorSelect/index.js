import React from "react";

export function GeneratorSelect(props) {
  const generators = props.generators.map(generator =>
    <option key={ generator } value={ generator }>{ generator }</option>
  );
  return (
    <select onChange={props.onChange}>{ generators }</select>
  )
}