import merge from 'lodash/merge';

import { SET_SEARCH_UI_TRUE, SET_SEARCH_UI_FALSE } from '../actions/search_ui_actions';

const searchUIRecuder = ( state = {}, action ) => {
  Object.freeze(state);

  switch (action.type) {
    case SET_SEARCH_UI_TRUE:
      return true;
    case SET_SEARCH_UI_FALSE:
      return false;
    default:
      return state;
  }
}

export default searchUIRecuder;
