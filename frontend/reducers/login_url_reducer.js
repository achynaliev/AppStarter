import merge from 'lodash/merge';

import { SET_LOGIN_URL, REMOVE_LOGIN_URL } from '../actions/search_ui_actions';

const LoginURLreducer = ( state = {}, action ) => {
  Object.freeze(state);

  switch (action.type) {
    case SET_LOGIN_URL:
      return action.url;
    case REMOVE_LOGIN_URL:
      return '/';
    default:
      return state;
  }
}

export default LoginURLreducer;
