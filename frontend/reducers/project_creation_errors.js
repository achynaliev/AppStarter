import { RECEIVE_PROJECT, RECEIVE_PROJECT_ERRORS, CLEAR_PROJECT_ERRORS } from '../actions/project_actions';
import merge from "lodash/merge";

const _nullState = {
  project_errors: []
};

export default (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PROJECT:
      return [];
    case RECEIVE_PROJECT_ERRORS:
      return [...action.errors]
    case CLEAR_PROJECT_ERRORS:
      return [];
    default:
      return state;
  }
};
