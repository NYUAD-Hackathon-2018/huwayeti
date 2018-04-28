import React from 'react';
import { Control, LocalForm } from 'react-redux-form';
// import { InputField } from 'react-semantic-redux-form';

class ClaimSubmissionForm extends React.Component {
  
  handleSubmit(val) {
    // Do anything you want with the form value
    // send val (which is a json using a post request)
    // claim:
    // verifier ID
    // claimer ID
    // location 
    // date

    // type( ex. medical test)
    // description
    console.log(val);
  }

  render() {
    return (
      <LocalForm onSubmit={(val) => this.handleSubmit(val)}>
        <Control.text model=".Verifier ID" />
        <Control.text model=".Claimer ID" />
        <Control.text model=".Type" /> 
        <Control.text model=".Description" />
        <Control.text  model=".Location" />
        <button>Submit!</button>
      </LocalForm>
    );
  }
}

export default ClaimSubmissionForm;