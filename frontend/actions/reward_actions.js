import * as rewardsAPIUtil from '../util/rewards_api_util';

export const RECEIVE_ALL_REWARDS = 'RECEIVE_ALL_REWARDS';

export const receiveAllRewards = rewards => ({
  type: RECEIVE_ALL_REWARDS,
  rewards
});

export const getAllRewards = () => dispatch => (
  rewardsAPIUtil.requestRewards().then(rewards => (
    dispatch(receiveAllRewards(rewards))
  ))
);
