import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';


import store from './store.js';

class AuthForm extends React.Component {
  handleSubmit(user) {
    alert(user.firstName)
  }
  render() {
    return (
      <Form
        model="user"
        onSubmit={(user) => this.handleSubmit(user)}>

        <label htmlFor="user.firstName">First name:</label>
        <Control.text model="user.firstName" id="user.firstName" />

        <label htmlFor="user.lastName">Last name:</label>
        <Control.text model="user.lastName" id="user.lastName" />

        <button type="submit">
          Finish registration!
        </button>
      </Form>
    );
  }
}

class ClaimViewLogin extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <AuthForm />
            </Provider>
        );
    }
}

export default ClaimViewLogin