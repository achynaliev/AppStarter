import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { requestProjects, requestProject } from './util/project_api_util';
import { getAProject, getAllProjects } from './actions/project_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  // window.store = store;
  // window.dispatch = store.dispatch;
  // window.getAllProjects = getAllProjects;
  // window.getAProject = getAProject;
});
