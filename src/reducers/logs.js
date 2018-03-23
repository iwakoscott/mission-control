import {
  CREATE_LOG_SUCCESS,
  CREATE_LOG,
  FETCH_LOGS_SUCCESS,
  FETCH_LOGS,
  FETCH_LOGS_FAIL,
  DELETE_ALL_LOGS
} from '../actions/logs';

const initialState = {
  logs: [],
  isFetching: false,
  error: null,
  isCreating: false,
};

export default function logs(state=initialState, action){
  switch(action.type){
    case CREATE_LOG:
      return {
        ...state,
        isCreating: true
      };
    case CREATE_LOG_SUCCESS:
      return {
        ...state,
        logs: [action.log, ...state.logs],
        isCreating: false
      };
    case FETCH_LOGS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_LOGS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case FETCH_LOGS_SUCCESS:
      const reversed = action.logs.reverse();
      return {
        ...state,
        logs: [...reversed],
        isFetching: false,
        error: null
      };
    case DELETE_ALL_LOGS:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
