import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import {mockClaims} from '../mock-data/claims.js';
import {LocalForm} from 'react-redux-form';

class ClaimViewer3 extends React.Component {
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
          <h3><i className="file icon"></i>Government Issued Documents</h3>
          <table className="ui celled table">
            <thead>
                <th>DocumentType</th>
                <th>Details</th>
            </thead>
            <tbody>
            <tr>
                  <td>Birth Certificate</td>
                  <td>
                    <b>Date of Birth:</b>  01 January 1987<br/>
                    <b>Place of Birth:</b> Al-Hamah<br/>
                    <b>Father's Name:</b>  ILIYAS Mohammad
                  </td>
                </tr>
                <tr>
                  <td>Marriage Certificate</td>
                  <td>
                    <b>Date of Marriage:</b>  20 January 2009<br/>
                    <b>Place of Issue:</b> Al-Hamah<br/>
                    <b>Spouse's Name:</b>  Laila Yusuf
                  </td>
                </tr>
            </tbody>
            </table>
            <h3><i className="graduation cap icon"></i>Education</h3>
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
                  <td>High School Diploma</td>
                  <td className="positive">Obtained</td>
                  <td>14 June 2004</td>
                  <td>Al-Hamah</td>
                  <td><a>Mr. Hamza Abid</a></td>
                  <td>Omar Bin Abdul Aziz School</td>
                </tr>
            </tbody>
            </table>

          <h3><i className="wrench icon"></i>Skill Certifications</h3>
          <table className="ui celled table">
            <thead>
                <th>DocumentType</th>
                <th>Details</th>
            </thead>
            <tbody>
            <tr>
                  <td>Heavy Truck License</td>
                  <td>
                    <b>Date of Issue:</b>  22 December 2004<br/>
                    <b>Weight Category:</b> 2.5 tons<br/>
                    <b>Issued By:</b> Syria - Ministry of Transport and Roadworks
                  </td>
                </tr>
            </tbody>
            </table>

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
              <tr>
                <td>Bivalent Oral Polio</td>
                <td className="positive">Received</td>
                <td>29 April 2018</td>
                <td>Abu Dhabi, UAE</td>
                <td><a>Dr. Oorja M.</a></td>
                <td>NMC Hospital</td>
              </tr>
            </tbody>
            </table>
            <br/>
          </div>
        </div>
      </div>
  )};
}

export default ClaimViewer3
