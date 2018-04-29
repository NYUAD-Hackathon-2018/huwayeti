/*eslint-env jquery*/

import React from 'react';
import { Control, LocalForm } from 'react-redux-form';
import axios from 'axios';
import {browserHistory} from 'react-router'
import ReactDOM from 'react-dom';
import ClaimViewer2 from "./ClaimViewer2";

class ClaimSubmissionForm extends React.Component {
  
  handleSubmit(val) {

    var url = "http://localhost:3000/org.acme.network.VerifyClaim"; // PLACEHOLDER

    var claimId = Math.floor((Math.random() * 999999) + 1);
    var verifierId = Math.floor((Math.random() * 999999) + 1);
    var claimerId = Math.floor((Math.random() * 999999) + 1);
    var location = val.Location;
    var date = new Date();
    var photoUrl = "https://i.imgur.com/HWfB5zl.png"
    var type = val.Type ;
    var description = val.Description;

    console.log(val);

    var form = {'claimId': claimId, 'verifierId': verifierId, 'claimerId':claimerId, 'newClaimDetail':{
    'location':location, 'date': date, 'type':type, 'description':description, 'photoURL': photoUrl}}

    const response = axios.post(url, { form });
    console.log(response);

    ReactDOM.render(<ClaimViewer2/>, document.getElementById('root'));
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