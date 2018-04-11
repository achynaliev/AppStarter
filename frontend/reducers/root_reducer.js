import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesRuducer from './entities_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  entities: entitiesRuducer,
  ui: uiReducer
});

export default rootReducer;
