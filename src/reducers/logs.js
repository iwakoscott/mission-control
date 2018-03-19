import {
  CREATE_LOG_SUCCESS,
  FETCH_LOGS_SUCCESS,
  FETCH_LOGS,
  FETCH_LOGS_FAIL
} from '../actions/logs';

const initialState = {
  logs: [],
  isFetching: false,
  error: null
};

export default function logs(state=initialState, action){
  switch(action.type){
    case CREATE_LOG_SUCCESS:
      return {
        ...state,
        logs: [action.log, ...state.logs]
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
    default:
      return state;
  }
}
