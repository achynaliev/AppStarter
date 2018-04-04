import merge from 'lodash/merge';

import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';

const projectReducer = (state = {}, action ) => {
  Object.freeze(state);

  let project;
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.projects);
    case RECEIVE_PROJECT:
      project = action.project;
      return merge({}, state, {[project.project.id]: project.project});
    default:
      return state;
  }
};

export default projectReducer;
