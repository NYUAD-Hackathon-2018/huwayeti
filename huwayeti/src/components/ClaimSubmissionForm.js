/*eslint-env jquery*/

import React from 'react';
import { Control, LocalForm } from 'react-redux-form';
import axios from 'axios';


class ClaimSubmissionForm extends React.Component {
  
  handleSubmit(val) {

    var url = "https://google.com"; // PLACEHOLDER

    var claimId = Math.floor((Math.random() * 999999) + 1);
    var verifierId = Math.floor((Math.random() * 999999) + 1);
    var claimerId = Math.floor((Math.random() * 999999) + 1);
    var location = val.Location;
    var date = new Date();
    var type = val.Type ;
    var description = val.Description;

    console.log(val);

    var form = {'claimId': claimId, 'verifierId':verifierId, 'claimerId':claimerId,
    'location':location, 'date': date, 'type':type, 'description':description}

    const response = axios.post(url, { form });
    console.log(response);
  }

  render() {
    return (
        <div>
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.js"></script> 
        </div>
        <div className="ui raised very padded text container segment">
        <h2> Add Information </h2>
      <LocalForm className="ui form" onSubmit={(val) => this.handleSubmit(val)}>
        <div className='field'>
        <Control.text placeholder="Verifier ID" model=".Verifier ID" />
        </div>
        <div className="five fields">
          <div className="field">
            <Control.text placeholder="Word One" model=".word1" />
          </div>
          <div className="field">
            <Control.text placeholder="Word Two" model=".word2" />
          </div>
          <div className="field">
            <Control.text placeholder="Word Three" model=".word3" />
          </div>
          <div className="field">
            <Control.text placeholder="Word Four" model=".word4" />
          </div>
          <div className="field">
            <Control.text placeholder="Word Five" model=".word5" />
          </div>
    </div>
        <div className='field'>
        <Control.select className='ui dropdown' style={{height:38}} placeholder="Type" model=".Type" > 
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
        <Control.file placeholder="File" model=".File" />
        <center> <button className="ui button" type="submit">Submit!</button> </center>
      </LocalForm>
      </div>
      </div>
    );
  }
}

export default ClaimSubmissionForm;