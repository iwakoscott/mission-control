import {
  FETCH_LOG,
  FETCH_LOG_SUCCESS,
  FETCH_LOG_FAIL,
  UPDATE_LOG,
  UPDATE_LOG_SUCCESS,
  UPDATE_LOG_FAIL
} from '../actions/log';

const initialState = {
  isFetching: false,
  isUpdating: false,
  log: {},
  editedLog: {},
  error: null
};

export default function log(state=initialState, action){
  switch(action.type){
    case FETCH_LOG:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_LOG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        log: action.log
      };
    case FETCH_LOG_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case UPDATE_LOG:
      return {
        ...state,
        isUpdating: true,
      };
    case UPDATE_LOG_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        editedLog: action.log
      };
    case UPDATE_LOG_FAIL:
      return {
        ...state,
        isUpdating: false,
      };
    default:
      return state;
  }
}
