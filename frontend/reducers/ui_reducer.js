import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import searchState from './search_ui_reducer';

export default combineReducers({
  searchState,
});
