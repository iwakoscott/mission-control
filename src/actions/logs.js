import { crud } from '../firebase';

export const CREATE_LOG = 'CREATE_LOG';
export const CREATE_LOG_SUCCESS = 'CREATE_LOG_SUCCESS';
export const CREATE_LOG_FAIL = 'CREATE_LOG_FAIL';
export const FETCH_LOGS = 'FETCH_LOGS';
export const FETCH_LOGS_SUCCESS = 'FETCH_LOGS_SUCCESS';
export const FETCH_LOGS_FAIL = 'FETCH_LOGS_FAIL';
export const UPDATE_LOG = 'UPDATE_LOG';
export const UPDATE_LOG_SUCCESS = 'UPDATE_LOG_SUCCESS';
export const UPDATE_LOG_FAIL = 'UPDATE_LOG_FAIL';
export const DELETE_LOG = 'DELETE_LOG';
export const DELETE_LOG_SUCCESS = 'DELETE_LOG_SUCCESS';
export const DELETE_LOG_FAIL = 'DELETE_LOG_FAIL';
export const DELETE_ALL_LOGS = 'DELETE_ALL_LOGS';

// create action creators
function createLog(){
  return {
    type: CREATE_LOG
  };
}

function createLogSuccess(log){
  return {
    type: CREATE_LOG_SUCCESS,
    log
  }
}

function createLogFail(error){
  return {
    type: CREATE_LOG_FAIL,
    error
  }
}

// create thunk pattern
export function handleCreateLog(log){
  return (dispatch) => {
    dispatch(createLog());
    return crud.create(log)
      .then(() => dispatch(createLogSuccess(log)))
      .catch((error) => {
        dispatch(createLogFail(error));
      });
  }
}

// readLogs action creators

function fetchLogs(){
  return {
    type: FETCH_LOGS
  };
}

function fetchLogsSuccess(logs){
  return {
    type: FETCH_LOGS_SUCCESS,
    logs
  };
}

function fetchLogsFail(error){
  return {
    type: FETCH_LOGS_FAIL,
    error
  };
}

export function fetchAndHandleLogs(n){
  return (dispatch) => {
    dispatch(fetchLogs());
    return crud.readLogs(n)
      .then(logs => dispatch(fetchLogsSuccess(logs.val())))
      .catch(error => dispatch(fetchLogsFail(error)));
  };
}

function deleteLogs(){
  return {
    type: DELETE_ALL_LOGS,
  };
}

export function handleDeleteAllLogs(){
  return (dispatch) => crud.deleteAllLogs().then(dispatch(deleteLogs()));
}
