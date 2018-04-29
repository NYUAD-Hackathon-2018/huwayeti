import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import {mockClaims} from '../mock-data/claims.js';
import { LocalForm } from 'react-redux-form';
import {browserHistory} from 'react-router';

class ClaimViewer extends React.Component {
    handleSubmit(val) {
      browserHistory.push('/VerifyClaim')
    }
    render() {
        return (
          <div>
            <div className="ui padded stackable grid">
              <div className="four wide column">
                <div className="ui card">
                  <div className="image">
                    <img src="https://i.imgur.com/HWfB5zl.png"/>
                  </div>
                  <div className="content">
                    <div className="header">Mohammad Yusuf</div>
                    <div className="description">
                      <div className="ui divided list">
                        <div className="item">
                          <div className="header">ID</div>
                          {mockClaims.id}
                        </div>
                        <div className="item">
                          <div className="header">Date of Birth</div>
                          01-Jan-1987
                        </div>
                        <div className="item">
                          <center><LocalForm
                            className="ui form"
                            onSubmit={(val)=>this.handleSubmit(val)}>
                          <button className="fluid ui button">
                          Submit New Claim
                          </button>
                          </LocalForm>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">
                      Joined in 2013
                    </span>
                    <span>
                      <i className="globe icon"></i>
                        Syria
                    </span>
                  </div>
                </div>
              </div>
            <div className="twelve wide column">
            <h3><i className="heartbeat icon"></i>Health Records</h3>
            <table className="ui celled table">
              <thead>
                  <th>Claim</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Verified by</th>
                  <th>Organization</th>
              </thead>
              <tbody>
                <tr>
                  <td>HIV</td>
                  <td className="positive">Clear</td>
                  <td>3 January 2017</td>
                  <td>Zaatari Village, Jordan</td>
                  <td><a>Dr. Azhar Khan</a></td>
                  <td>WHO</td>
                </tr>
                <tr>
                  <td>Tuberculosis</td>
                  <td className="positive">Clear</td>
                  <td>4 February 2018</td>
                  <td>Amman, Jordan</td>
                  <td><a>Dr. Ali Nasser</a></td>
                  <td>WHO</td>
                </tr>
                <tr>
                  <td>Lead Poisoning</td>
                  <td className="positive">Clear</td>
                  <td>4 February 2018</td>
                  <td>Amman, Jordan</td>
                  <td><a>Dr. Ali Nasser</a></td>
                  <td>WHO</td>
                </tr>
              </tbody>
              </table>
            </div>
          </div>
        </div>
    )};
}

export default ClaimViewer
