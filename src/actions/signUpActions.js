import axios from 'axios';
import { API_URL } from '../constants';

export function userSignUpRequest(data) {
    return dispatch => {
        return axios.post(`${API_URL}/api/users`, { user: data });
    }
}