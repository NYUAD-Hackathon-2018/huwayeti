import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import {mockClaims} from '../mock-data/claims.js';
import { LocalForm } from 'react-redux-form';
import {browserHistory} from 'react-router';

class Demo extends React.Component {
    handleMedical(val) {
      browserHistory.push('/org.acme.network.Member/1z45e23bb')
    }
    handleBorder(val) {
      browserHistory.push('/authenticate')
    }
    render() {
        return (
          <center>
            <div className="">
            <LocalForm
              className="ui form"
              onSubmit={(val)=>this.handleMedical(val)}>
              <button className="ui button">
                Verify Medical Record Demo
              </button>
            </LocalForm>
            <LocalForm
              className="ui form"
              onSubmit={(val)=>this.handleBorder(val)}>
              <button className="ui button">
                Check Personal Records Demo
              </button>
            </LocalForm>
            </div>
          </center>
    )};
}

export default Demo
