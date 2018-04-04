import merge from 'lodash/merge';

import { RECEIVE_ALL_PROJECTS } from '../actions/project_actions';

const projectsReducer = (state = {}, action ) => {
  Object.freeze(state);

  let project;
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.projects);
    default:
      return state;
  }
};

export default projectsReducer;
