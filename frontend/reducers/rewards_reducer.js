import merge from 'lodash/merge';

import { RECEIVE_ALL_REWARDS } from '../actions/reward_actions';

const rewardsReducer = (state = {}, action ) => {
  Object.freeze(state);

  let reward;
  switch (action.type) {
    case RECEIVE_ALL_REWARDS:
      return merge({}, state, action.rewards);
    default:
      return state;
  }
};

export default rewardsReducer;
