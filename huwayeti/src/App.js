import React, {Component} from 'react';
import './App.css';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import ClaimSubmissionForm from './components/ClaimSubmissionForm';
import {routerReducer, syncHistoryWithStore} from 'react-router-redux'
import {browserHistory, Route, Router} from 'react-router';
import ClaimViewer from "./components/ClaimViewer";

const store = createStore(
    combineReducers({
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route exact path="/" component={ClaimViewer}/>
                    <Route exact path="submit" component={ClaimSubmissionForm}/>
                </Router>
            </Provider>
        );
    }
}
