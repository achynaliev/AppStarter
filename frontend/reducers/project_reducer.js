import merge from 'lodash/merge';

import { RECEIVE_PROJECT, RECEIVE_LIKE } from '../actions/project_actions';

const projectReducer = (state = {}, action ) => {
  Object.freeze(state);

  let project;
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, action.currentProject);
    case RECEIVE_LIKE:
      project = Object.values(action.currentProject);
      return merge({}, project[0]);
    default:
      return state;
  }
};

export default projectReducer;
