import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (user) => {
  debugger
  return {
    type: RECEIVE_CURRENT_USER, 
    user
  };
};

export const logoutCurrentUser = () => {
  debugger
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  debugger
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = (user) => dispatch => {
  debugger
 return  dispatch(APIUtil.login(user)).then(user => {
                debugger
                return dispatch(receiveCurrentUser(user))}
              ).catch(error => console.log(error));
}


// export const login = user => dispatch => {
//   return dispatch(receiveCurrentUser(
//     {username: "user1", password: "hunter12"}
//     ))
// }

export const signup = (user) => dispatch => {
  debugger
  return dispatch(APIUtil.signup(user))
    .then(user => dispatch(receiveCurrentUser(user)));
}

export const logout = () => dispatch => {
  debugger
  return dispatch(APIUtil.logout())
    .then(()=> dispatch(logoutCurrentUser()));
}