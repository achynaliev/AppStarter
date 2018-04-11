import * as likesAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE_INDEX = 'RECEIVE_LIKE_INDEX';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';

export const receiveLikeIndex = like => ({
  type: RECEIVE_ALL_REWARDS,
  like
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  Object.values(like)
});

export const receiveLikeIndex = (project_id) => dispatch => (
  rewardsAPIUtil.createLike(project_id).then(like => (
    dispatch(receiveLikeIndex(like))
  ))
);

export const receiveLike = (project_id) => dispatch => (
  rewardsAPIUtil.createLike(project_id).then(like => (
    dispatch(receiveLikeIndex(like))
  ))
);
