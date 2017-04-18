import React, { Component } from 'react';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.data = {};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(fieldName) {
        this.data[fieldName] = this[fieldName].value;
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.data);
    }

    render() {
        return (
            <form>
                <h1>Sign up and starting your own blog!</h1>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        ref={(input) => this.username = input}
                        onChange={() => this.onChange('username')}
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        ref={(input) => this.email = input}
                        onChange={() => this.onChange('email')}
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="text"
                        name="password"
                        className="form-control"
                        ref={(input) => this.password = input}
                        onChange={() => this.onChange('password')}
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password confirmation</label>
                    <input
                        type="text"
                        name="passwordConfirmation"
                        className="form-control"
                        ref={(input) => this.passwordConfirmation = input}
                        onChange={() => this.onChange('passwordConfirmation')}
                    />
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