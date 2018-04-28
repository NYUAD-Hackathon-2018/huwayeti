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
        <div className="ui raised very padded text container segment">
        <h2> Add Information </h2>
      <LocalForm className="ui form" onSubmit={(val) => this.handleSubmit(val)}>
        <div className='field'>
        <Control.text placeholder="Verifier ID" model=".Verifier ID" />
        </div>
        <div className='field'>
        <Control.text placeholder="Claimer ID" model=".Claimer ID" />
        </div>
        <div className='field'>
        <Control.select className='ui dropdown' placeholder="Type" model=".Type" > 
             <option value="">Information Type</option>
          <option value="med-report">Medical Report</option>
          <option value="gov-doc">Government Document</option>
          <option value="skill-certif">Skill Certification</option>
          </Control.select>
          </div>
          <div className='field'>
        <Control.text placeholder="Location" model=".Location" />
        </div>
        <div className='field'>
        <Control.textarea placeholder="Description" model=".Description" />
        </div>
        <center> <button className="ui button" type="submit">Submit!</button> </center>
      </LocalForm>
      </div>
      </div>
    );
  }
}

export default ClaimSubmissionForm;