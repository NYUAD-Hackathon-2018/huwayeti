import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Control, LocalForm, actions } from 'react-redux-form';

import ClaimViewer from "./ClaimViewer";



import store from './store.js';

class ClaimViewLogin extends React.Component {
    handleSubmit(user) {
        ReactDOM.render(<ClaimViewer/>, document.getElementById('root'));
      }
    render() {
        return (
            <Provider store={ store }>
            <div>
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.js"></script> 
            </div>
            

            <div className="ui raised very padded text container segment">
                <h2> Add Information </h2>

                <LocalForm
                    classname="ui form"
                    model="user"
                    onSubmit={(user) => this.handleSubmit(user)}>

                    <div className='field ui fluid input'>
                    <Control.text model="user.word_one" id="user.word_one" placeholder='Word One'/>
                    <Control.text model="user.word_two" id="user.word_two" placeholder='Word Two'/>
                    <Control.text model="user.word_three" id="user.word_three" placeholder='Word Three'/>
                    <Control.text model="user.word_four" id="user.word_four" placeholder='Word Four'/>
                    <Control.text model="user.word_five" id="user.word_five" placeholder='Word Five'/>
                    </div>
                    <div className='field ui fluid input'>
                    <Control.text model="user.public_key" id="user.public_key" placeholder='Data Authorization Key'/>
                    </div>
                    <button className="ui button" type="submit">
                        Authenticate
                    </button>
                </LocalForm>
            </div>
            </div>
            </Provider>
        );
    }
}

export default ClaimViewLogin
