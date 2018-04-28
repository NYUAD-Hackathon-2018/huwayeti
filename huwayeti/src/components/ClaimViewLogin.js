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
        var alignCenter = {
            justifyContent: 'center',
          };

        return (
            <Provider store={ store }>
            <div>
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.js"></script> 
            </div>
            

            <div className="ui raised very padded text container segment" style={alignCenter} >
                <div className="ui grid">
                    <div className="eight wide column"> <h2>Enter your 5 secret words!</h2> </div>
                    <div className="eight wide right aligned column"> <h3>Dr. Abdul</h3> </div>
                </div>
                

                <LocalForm
                    className="ui form"
                    model="user"
                    onSubmit={(user) => this.handleSubmit(user)}>

                    <div className= "five fields">
                            <div className="field">
                            <Control.text placeholder="Word One" id="user.word_one" model=".word1" />
                            </div>
                            <div className="field">
                            <Control.text placeholder="Word Two" id="user.word_two" model=".word2" />
                            </div>
                            <div className="field">
                            <Control.text placeholder="Word Three" id="user.word_three" model=".word3" />
                            </div>
                            <div className="field">
                            <Control.text placeholder="Word Four" id="user.word_four" model=".word4" />
                            </div>
                            <div className="field">
                            <Control.text placeholder="Word Five" id="user.word_five" model=".word5" />
                            </div>
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
