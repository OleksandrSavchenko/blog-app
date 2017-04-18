import axios from 'axios';
import { API_URL } from '../constants/constants';
import { SHOW_FORM_ERRORS } from '../constants/types';

export function userSignUpRequest(data) {
    return dispatch => {
        return axios.post(`${API_URL}/api/users`, data);
    }
}

export function showFormErrors(errors) {
    return dispatch => {
        return dispatch({
            type: SHOW_FORM_ERRORS,
            errors
        });
    }
}