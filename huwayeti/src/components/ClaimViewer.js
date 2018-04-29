import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import {mockClaims} from '../mock-data/claims.js';

class ClaimViewer extends React.Component {
    render() {
        return (
          <div>
          <div className="ui very padded inverted segment">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
            <div className="ui equal width centered grid">
              <div className="ui left floated column">
                  <div className="ui huge left aligned white inverted header">
                  Hawiyati
                  </div>
              </div>
              <div className="ui right floated column">
                <div className="ui huge right aligned green inverted header">
                 هويتي
                </div>
              </div>
            </div>
            </div>
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
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>Claim</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Verified by</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HIV</td>
                  <td className="positive">Clear</td>
                  <td>3 January 2017</td>
                  <td><a>Abdul</a></td>
                </tr>
                <tr>
                  <td>Tuberculosis</td>
                  <td className="positive">Clear</td>
                  <td>3 January 2017</td>
                  <td><a>Abdul</a></td>
                </tr>
              </tbody>
              </table>
              <button className="ui right floated button">
                Submit New Claim
              </button>
            </div>
          </div>
        </div>
    )};
}

export default ClaimViewer
