import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import projects from './projects_reducer';
import currentProject from './project_reducer';

export default combineReducers({
  projects,
  currentProject
});
