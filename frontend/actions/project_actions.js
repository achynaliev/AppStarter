import * as projectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const getAllProjects = () => dispatch => (
  projectAPIUtil.requestProjects().then(projects => (dispatch(receiveAllProjects(projects))))
);

export const getAProject = (id) => dispatch => (
  projectAPIUtil.requestProject(id).then(project => (dispatch(receiveProject(project))))
);
