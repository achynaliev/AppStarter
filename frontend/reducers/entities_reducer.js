import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import projects from './projects_reducer';
import currentProject from './project_reducer';
import rewards from './rewards_reducer';
import searchResults from './search_reducer';

export default combineReducers({
  projects,
  currentProject,
  rewards,
  searchResults,
});
