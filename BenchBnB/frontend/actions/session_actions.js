import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER, 
    user
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = (user) => dispatch => {
 return  dispatch(APIUtil.login(user))
            .then(user => dispatch(receiveCurrentUser(user)));
}


export const signup = (user) => dispatch => {
  return dispatch(APIUtil.signup(user))
    .then(user => dispatch(receiveCurrentUser(user)));
}

export const logout = () => dispatch => {
  return dispatch(APIUtil.logout())
    .then(()=> dispatch(logoutCurrentUser()));
}