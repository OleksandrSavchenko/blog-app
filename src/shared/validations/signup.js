import Validator from 'validator';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isNull(data.username)) {
        errors.username = 'Username is required!'
    }
    if (Validator.isNull(data.email)) {
        errors.email = 'Email is required!'
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }
    if (Validator.isNull(data.password)) {
        errors.password = 'Password is required!'
    }
    if (Validator.isNull(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Password confirmation is required!'
    }
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Password must match'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}