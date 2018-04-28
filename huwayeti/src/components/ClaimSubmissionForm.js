import React from 'react';
// import { Form, actions, Control, Field } from 'react-redux-form';
// import { connect } from 'react-redux';

class ClaimSubmissionForm extends React.Component {
    // constructor(props) {
    //     super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleSubmit(user) {
        // const { dispatch } = this.props;
        //
        // // Do whatever you like in here.
        // // You can use actions such as:
        // // dispatch(actions.submit('user', somePromise));
        // // etc.
        // const somePromise = new Promise((resolve) => {
        //     /* eslint-disable no-console */
        //     console.log(user);
        //     /* eslint-enable no-console */
        //     setTimeout(() => { resolve(true); }, 1000);
        // });
        //
        // dispatch(actions.submit('user', somePromise));
    // }
    render() {
        return (
            <div>hi!</div>
            // <Form model="user" onSubmit={this.handleSubmit}>
            //     <Field model="user.bag">
            //         <label>
            //             <input type="radio" value="plastic" />
            //             <span>Plastic</span>
            //         </label>
            //         <label>
            //             <input type="radio" value="paper" />
            //             <span>Paper</span>
            //         </label>
            //     </Field>
            //
            //     <Control.button model="user" disabled={{ valid: false }}>
            //         Finish registration!
            //     </Control.button>
            //     <input type="reset" value="Reset" title="reset"/>
            // </Form>
        );
    }
}

// export default connect(s=>s)(ClaimSubmissionForm);
export default ClaimSubmissionForm