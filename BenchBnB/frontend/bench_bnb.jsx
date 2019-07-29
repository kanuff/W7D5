import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {Root} from './components/root';
import {login, logout, signup} from './actions/session_actions';
// import {login, logout, signup} from './util/session_api_util';
import React from 'react'
import { fetchBenches } from "./actions/bench_actions"

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if(window.currentUser){
    const preloadedState = {
      entities : {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore();
  }
  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login; 
  window.logout = logout; 
  window.signup = signup;
  window.fetchBenches = fetchBenches;
  // TESTING END
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});