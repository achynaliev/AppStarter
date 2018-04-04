import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { requestProjects, requestProject } from './util/project_util';

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
  const req = requestProjects;
  const req1 = requestProject;
  ReactDOM.render(<Root store={store} />, root);
  window.req = req;
  window.req1 = req1;
});
