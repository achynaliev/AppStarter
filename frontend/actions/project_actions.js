import * as projectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const CLEAR_PROJECT_ERRORS = 'CLEAR_PROJECT_ERRORS';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';

export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = currentProject => ({
  type: RECEIVE_PROJECT,
  currentProject
});

export const receiveLike = currentProject => ({
  type: RECEIVE_LIKE,
  currentProject
});

export const clearProjectErrors = () => ({
  type: CLEAR_PROJECT_ERRORS,
});

export const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const deleteLikeIndex = id => dispatch => (
  projectAPIUtil.deleteLike(id).then(projects => (dispatch(receiveAllProjects(projects)))
));

export const deleteLike = (id) => dispatch => (
  projectAPIUtil.deleteLike(id).then(like => (dispatch(receiveLike(like)))
));

export const createLikeIndex = (project_id) => dispatch => (
  rewardsAPIUtil.createLike(project_id).then(projects => (
    dispatch(receiveAllProjects(projects))
  ))
);

export const createLike = (project_id) => dispatch => (
  projectAPIUtil.createLike(project_id).then(like => (
    dispatch(receiveLike(like))
  ))
);

export const getAllProjects = () => dispatch => (
  projectAPIUtil.requestProjects().then(projects => (
    dispatch(receiveAllProjects(projects))))
);

export const getAProject = (id) => dispatch => (
  projectAPIUtil.requestProject(id).then(Currentproject => (
    dispatch(receiveProject(Currentproject))))
);

// export const createProject = project => dispatch => (
//   projectAPIUtil.createProject(project).then(project => (
//     dispatch(receiveProject(project))) ,(err => dispatch(receiveProjectErrors(err.responseJSON))
//   ))
// );

export const createProject = project => dispatch => (
  projectAPIUtil.createProject(project).then(project => {
    dispatch(receiveProject(project));
    return project;
  }).fail(err => {dispatch(receiveProjectErrors(err.responseJSON)); return err;
  })
);

export const createBacking = backing => dispatch => (
  projectAPIUtil.createBacking(backing).then(project => (dispatch(receiveProject(project)))
));

export const deleteBacking = id => dispatch => (
  projectAPIUtil.deleteBacking(id).then(project => (dispatch(receiveProject(project)))
));
