import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Control, LocalForm, actions } from 'react-redux-form';
import {browserHistory} from 'react-router'


class LoaderButton extends React.Component {
    nextPage(val) {
        browserHistory.push('/org.acme.network.Member/lz45e23bb');   
      }

    render() {
        return (
            <LocalForm className="ui form" onSubmit={(val) => this.nextPage(val)}>
            <button className="ui loading button" type="submit">
                        Loading
                    </button>
                    </LocalForm>
        );
    }
}

export default LoaderButton
