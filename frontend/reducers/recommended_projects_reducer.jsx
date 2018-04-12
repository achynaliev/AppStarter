import merge from 'lodash/merge';

import { RECEIVE_RECOMMENED } from '../actions/project_actions';

const recommendedProjectsReducer = (state = {}, action ) => {
  Object.freeze(state);

  let project;
  switch (action.type) {
    case RECEIVE_RECOMMENED:
      return merge({}, action.projects);
    default:
      return state;
  }
};

export default recommendedProjectsReducer;
