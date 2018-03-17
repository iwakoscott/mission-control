import { auth } from '../firebase';
import { formatUserData } from '../utils/tools';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';

export function authUser(uid){
  return {
    type: AUTH_USER,
    uid
  };
}

export function unAuthUser(){
  return {
    type: UNAUTH_USER
  };
}

export function fetchUser(){
  return {
    type: FETCH_USER
  };
}

export function fetchUserSuccess(uid, user, timeStamp){
  return {
    type: FETCH_USER_SUCCESS,
    uid,
    user,
    timeStamp
  };
}

export function fetchUserFail(message){
  return {
    type: FETCH_USER_FAIL,
    message
  };
}

export function fetchAndHandleAuthedUser(email, password, callback){
  return (dispatch) => {
    dispatch(fetchUser());
    return auth.doSignInWithEmailAndPassword(email, password)
            .then(({ providerData }) => {
              const { displayName, photoURL, uid } = providerData[0];
              const user = formatUserData(displayName, photoURL, uid);
              dispatch(fetchUserSuccess(uid, user, Date.now()));
              callback();
            })
            .catch(error => dispatch(fetchUserFail(error.message)));
  };
}
