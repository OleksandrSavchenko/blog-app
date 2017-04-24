import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import validateInput from '../../shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.data = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.showFormErrors({});
    }

    isValid() {
        const { errors, isValid } = validateInput(this.data);

        if (!isValid) {
            this.props.showFormErrors(errors);
        }

        return isValid;
    }

    onChange(fieldName, value) {
        this.data[fieldName] = value;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.props.showFormErrors({});
            this.props.userSignUpRequest(this.data).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You signed up successfully. Welcome my friend!'
                    });
                    browserHistory.push('/');
                },
                (err) => {this.props.showFormErrors(err.response.data)}
            );
        }
    }

    render() {
        const { formErrors } = this.props;

        return (
            <form>
                <h1>Sign up and starting your own blog!</h1>

                <TextFieldGroup
                    error={formErrors.username}
                    label="Username"
                    inputType="text"
                    onChange={this.onChange}
                    field="username"
                />

                <TextFieldGroup
                    error={formErrors.email}
                    label="Email"
                    inputType="text"
                    onChange={this.onChange}
                    field="email"
                />

                <TextFieldGroup
                    error={formErrors.password}
                    label="Password"
                    inputType="password"
                    onChange={this.onChange}
                    field="password"
                />

                <TextFieldGroup
                    error={formErrors.passwordConfirmation}
                    label="Password Confirmation"
                    inputType="password"
                    onChange={this.onChange}
                    field="passwordConfirmation"
                />

                <div className="form-group">
                    <button
                        onClick={(e) => this.onSubmit(e)}
                        className="btn btn-primary btn-lg"
                    >
                        Sign up!
                    </button>
                </div>
            </form>
        );
    }
}