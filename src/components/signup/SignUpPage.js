import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userSignUpRequest } from '../../actions/signUpActions';

import SignUpForm from './SignUpForm';

class SignUpPage extends Component {
    render() {
        const { userSignUpRequest } = this.props;

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignUpForm userSignUpRequest={userSignUpRequest} />
                </div>
            </div>
        );
    }
}

SignUpPage.propTypes = {
    userSignUpRequest: React.PropTypes.func.isRequired
};

export default connect(null, { userSignUpRequest })(SignUpPage);