import merge from 'lodash/merge';

import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECTS_LIKE } from '../actions/project_actions';

const projectsReducer = (state = {}, action ) => {
  Object.freeze(state);

  let project;
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.projects);
    case RECEIVE_PROJECTS_LIKE:
      let projects = merge({}, state, action.projects);
      let key = Object.keys(action.projects)
      projects[key[0]].likeId = [];
      return projects;
    default:
      return state;
  }
};

export default projectsReducer;
