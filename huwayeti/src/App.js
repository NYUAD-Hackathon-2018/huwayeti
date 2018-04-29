import React, {Component} from 'react';
import './App.css';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer, syncHistoryWithStore} from 'react-router-redux'
import {browserHistory, Route, Router} from 'react-router';

import ClaimSubmissionForm from './components/ClaimSubmissionForm';
import ClaimViewLogin from './components/ClaimViewLogin';
import ClaimViewer from "./components/ClaimViewer";
import ClaimViewer2 from "./components/ClaimViewer2";

const store = createStore(
    combineReducers({
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
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
            <Provider store={store}>
                <Router history={history}>
                    <Route exact path="/" component={ClaimViewLogin}/>
                    <Route exact path="/org.acme.network.Member/1z45e23bb" component={ClaimViewer}/>
                    <Route exact path="/org.acme.network.Member/lz45e23bb" component={ClaimViewer2}/>
                    <Route exact path="VerifyClaim" component={ClaimSubmissionForm}/>
                </Router>
            </Provider>
            <br/>
            <div className="ui footer">
            <center><img className="ui small image" src="https://i.imgur.com/EjJEWc3.png"></img></center>
          </div>
            </div>
        );
    }
}
