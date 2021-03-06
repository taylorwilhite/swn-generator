import React, { useReducer } from 'react';
import { Button, TextField, Collapse } from '@material-ui/core';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export const ContactForm = (props) => {
  const initialState = {
    display: false,
    name: '',
    email: '',
    message: '',
  }
  const reducer = (state, action) => {
    switch(action.type) {
      case 'display':
        return {...state, display: !state.display};
      case 'text':
        return {...state, ...action.data}
      default:
        throw new Error();
    }
  }
  const [formState, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = e => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({"form-name": "contact", ...formState})
    })
      .then(() => alert('Form submitted successfully!'))
      .catch(error => alert(error));
  };
  const isValidated = (state) => {
    return formState[state] !== '';
  }

  return (
    <div className="suggestion-form">
      <Button onClick={ () => dispatch({ type: 'display' }) }>
        { formState.display ? 'Hide' : 'Show'} Suggestion Form
      </Button>
      <Collapse in={formState.display}>
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <TextField name="name" fullWidth margin="normal" className="suggestion-field" label="Name (optional)" value={formState.name} onChange={e => dispatch({type: 'text', data: {name: e.target.value}})} />
          <TextField name="message" fullWidth margin="normal" className="suggestion-field" required label="Message" value={formState.message} multiline onChange={e => dispatch({type: 'text', data: {message: e.target.value}})} />
          <Button disabled={!isValidated('message')} className="suggestion-submit" onClick={handleSubmit} color="primary" size="small">Submit</Button>
        </form>
      </Collapse>
    </div>
  );
}