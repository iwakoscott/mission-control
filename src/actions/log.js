import { crud } from '../firebase';

export const FETCH_LOG = 'FETCH_LOG';
export const FETCH_LOG_SUCCESS = 'FETCH_LOG_SUCCESS';
export const FETCH_LOG_FAIL = 'FETCH_LOG_FAIL';
export const UPDATE_LOG = 'UPDATE_LOG';
export const UPDATE_LOG_SUCCESS = 'UPDATE_LOG_SUCCESS';
export const UPDATE_LOG_FAIL = 'UPDATE_LOG_FAIL';

function fetchLog(){
  return {
    type: FETCH_LOG
  };
}

function fetchLogSuccess(log){
  return {
    type: FETCH_LOG_SUCCESS,
    log
  };
}

function fetchLogFail(){
  return {
    type: FETCH_LOG_FAIL,
  };
}

export function fetchAndHandleLog(day){
  return (dispatch) => {
    dispatch(fetchLog());
    return crud.readLog(day)
      .then(snapshot => dispatch(fetchLogSuccess(snapshot)))
      .catch(error => dispatch(fetchLogFail(error)));
  };
}

function updateLog(){
  return {
    type: UPDATE_LOG,
  };
}

function updateLogSuccess(log){
  return {
    type: UPDATE_LOG_SUCCESS,
    log
  };
}

function updateLogFail(error){
  return {
    type: UPDATE_LOG_FAIL,
    error
  };
}

export function updateAndHandleLog(log, callback){
  return (dispatch) => {
    dispatch(updateLog());
    return crud.updateLog(log)
      .then(() => {
         dispatch(updateLogSuccess(log));
         callback();
      })
      .catch(error => dispatch(updateLogFail(error)));
  };
}
