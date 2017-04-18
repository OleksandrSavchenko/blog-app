import { SHOW_FORM_ERRORS } from '../constants/types';

let initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FORM_ERRORS:
            return { ...action.errors };
        default: return state;
    }
}