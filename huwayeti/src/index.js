import {React} from 'react';
import {createHistory} from 'history/createBrowserHistory'
import {ReactDOM} from 'react-dom';
import './index.css';
import App from './App';
import {registerServiceWorker} from './registerServiceWorker';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { combineReducers, createStore } from 'redux';
import { browserHistory } from 'react-router';

const reducer = combineReducers({
    routing: routerReducer
})


export const store =createStore(
    reducer
)

export const history = createHistory()


ReactDOM.render(<App history={history} store={store}/>, document.getElementById('root'));
registerServiceWorker();
