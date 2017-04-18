import express from 'express';
import Validator from 'validator';

let router = express.Router();

function validateInput(data) {
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
        isValid: Object.keys(errors).length == 0
    }
}

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
        res.status(400).json(errors);
    }
});

export default router;