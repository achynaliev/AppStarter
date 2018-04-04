import * as projectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = currentProject => ({
  type: RECEIVE_PROJECT,
  currentProject
});

export const getAllProjects = () => dispatch => (
  projectAPIUtil.requestProjects().then(projects => (dispatch(receiveAllProjects(projects))))
);

export const getAProject = (id) => dispatch => (
  projectAPIUtil.requestProject(id).then(Currentproject => (dispatch(receiveProject(Currentproject))))
);
