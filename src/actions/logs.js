import { crud } from '../firebase';

export const CREATE_LOG = 'CREATE_LOG';
export const CREATE_LOG_SUCCESS = 'CREATE_LOG_SUCCESS';
export const CREATE_LOG_FAIL = 'CREATE_LOG_FAIL';
export const READ_LOG = 'READ_LOG';
export const READ_LOG_SUCCESS = 'READ_LOG_SUCCESS';
export const READ_LOG_FAIL = 'READ_LOG_FAIL';
export const UPDATE_LOG = 'UPDATE_LOG';
export const UPDATE_LOG_SUCCESS = 'UPDATE_LOG_SUCCESS';
export const UPDATE_LOG_FAIL = 'UPDATE_LOG_FAIL';
export const DELETE_LOG = 'DELETE_LOG';
export const DELETE_LOG_SUCCESS = 'DELETE_LOG_SUCCESS';
export const DELETE_LOG_FAIL = 'DELETE_LOG_FAIL';

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
      .then(() => {
        dispatch(createLogSuccess(log));
      })
      .catch((error) => dispatch(createLogFail(error)));
  }
}
