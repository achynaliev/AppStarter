import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import projectReducer from './projects_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  projects: projectReducer
});

export default rootReducer;
