/**
 * rootReducer : combine all reducers
 * 
 */
import { combineReducers } from 'redux';
import mail from './mail_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  mail,
  form : formReducer
});

export default rootReducer;