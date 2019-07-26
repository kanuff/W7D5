import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {Root} from './components/root';
import {login, logout, signup} from './actions/session_actions';
// import {login, logout, signup} from './util/session_api_util';
import React from 'react'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login; 
  window.logout = logout; 
  window.signup = signup; 
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});