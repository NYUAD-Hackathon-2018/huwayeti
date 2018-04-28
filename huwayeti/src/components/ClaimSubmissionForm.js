import React from 'react';
import { Control, LocalForm } from 'react-redux-form';

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
        <div>
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.js"></script> 
        </div>
      <LocalForm className="ui form" onSubmit={(val) => this.handleSubmit(val)}>
        <Control.text placeholder="Verifier ID" model=".Verifier ID" />
        <Control.text placeholder="Claimer ID" model=".Claimer ID" />
        <Control.text placeholder="Type" model=".Type" /> 
        <Control.text placeholder="Description" model=".Description" />
        <Control.text placeholder="Location" model=".Location" />
        <center> <button className="ui button" type="submit">Submit!</button> </center>
      </LocalForm>
      </div>
    );
  }
}

export default ClaimSubmissionForm;