import React, { Component } from 'react';
import classnames from 'classnames';

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

    onChange(fieldName) {
        this.data[fieldName] = this[fieldName].value;
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.showFormErrors({});
        this.props.userSignUpRequest(this.data).then(
            (res) => {},
            (err) => {this.props.showFormErrors(err.response.data)}
        );
    }

    render() {
        const { formErrors } = this.props;

        return (
            <form>
                <h1>Sign up and starting your own blog!</h1>

                <div className={classnames("form-group", { "has-error": formErrors.username })}>
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        ref={(input) => this.username = input}
                        onChange={() => this.onChange('username')}
                    />
                    {formErrors.username && <span className="help-block">{formErrors.username}</span>}
                </div>

                <div className={classnames("form-group", { "has-error": formErrors.email })}>
                    <label className="control-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        ref={(input) => this.email = input}
                        onChange={() => this.onChange('email')}
                    />
                    {formErrors.email && <span className="help-block">{formErrors.email}</span>}
                </div>

                <div className={classnames("form-group", { "has-error": formErrors.password })}>
                    <label className="control-label">Password</label>
                    <input
                        type="text"
                        name="password"
                        className="form-control"
                        ref={(input) => this.password = input}
                        onChange={() => this.onChange('password')}
                    />
                    {formErrors.password && <span className="help-block">{formErrors.password}</span>}
                </div>

                <div className={classnames("form-group", { "has-error": formErrors.passwordConfirmation })}>
                    <label className="control-label">Password confirmation</label>
                    <input
                        type="text"
                        name="passwordConfirmation"
                        className="form-control"
                        ref={(input) => this.passwordConfirmation = input}
                        onChange={() => this.onChange('passwordConfirmation')}
                    />
                    {formErrors.passwordConfirmation && <span className="help-block">{formErrors.passwordConfirmation}</span>}
                </div>

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