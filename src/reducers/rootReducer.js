import { combineReducers } from 'redux';

import formErrors from './formErrorReducer';
import flashMessages from './flashMessagesReducer';

export default combineReducers({
    formErrors,
    flashMessages
});