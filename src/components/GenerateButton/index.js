import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(to right, #667db6, #0082c8)',
    borderRadius: 3,
    border: 0,
    color: 'white',
  },
};

const BaseButton = (props) => {
  return(
    <Button className={props.classes.root} variant="contained" onClick={props.onClick} >
      {props.children}
    </Button>
  )
};

export const GenerateButton = withStyles(styles)(BaseButton);