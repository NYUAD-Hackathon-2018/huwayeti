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
              <a href="/org.acme.network.Member/1z45e23bb">
              <button className="ui button">
                Verify Medical Record
              </button></a>
            <a href="/authenticate">
              <button className="ui button">
                Check Personal Records
              </button></a>
          </center>
    )};
}

export default Demo
