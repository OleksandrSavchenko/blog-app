import React, { Component } from 'react';

import SignUpForm from './SignUpForm';

export default class SignUpPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignUpForm />
                </div>
            </div>
        );
    }
}