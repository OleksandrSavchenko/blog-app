import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userSignUpRequest, showFormErrors } from '../../actions/signUpActions';
import { addFlashMessage } from '../../actions/flashMessagesActions';

import SignUpForm from './SignUpForm';

class SignUpPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignUpForm { ...this.props } />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        formErrors: state.formErrors
    }
}

export default connect(mapStateToProps, {
    userSignUpRequest,
    showFormErrors,
    addFlashMessage
})(SignUpPage);