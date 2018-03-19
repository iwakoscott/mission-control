import {
  CREATE_LOG_SUCCESS
} from '../actions/logs';

export default function logs(state=[], action){
  switch(action.type){
    case CREATE_LOG_SUCCESS:
      return [action.log, ...state];
    default:
      return state;
  }
}
