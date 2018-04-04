import merge from 'lodash/merge';

import { RECEIVE_PROJECT } from '../actions/project_actions';

const projectReducer = (state = {}, action ) => {
  Object.freeze(state);

  let project;
  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, action.currentProject);
    default:
      return state;
  }
};

export default projectReducer;
