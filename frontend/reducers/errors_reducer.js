import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import projectErrorsReducer from './project_creation_errors';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  project_errors: projectErrorsReducer
});

export default errorsReducer;
