import React from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export function GeneratorSelect(props) {
  const generators = props.generators.map(generator =>
    <MenuItem key={ generator } value={ generator }>{ generator }</MenuItem>
  );
  return (
    <Select value={props.value} autoWidth={ true } onChange={props.onChange}>{ generators }</Select>
  )
}