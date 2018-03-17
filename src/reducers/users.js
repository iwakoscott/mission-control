import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  AUTH_USER,
  UNAUTH_USER
} from '../actions/users';

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: ''
  }
};

function user(state=initialUserState, action){
  switch(action.type){
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        lastUpdated: action.timeStamp,
        info: action.user
      };
    default:
      return state;
  }
}

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedID: ''
};

export default function users(state=initialState, action){
  switch(action.type){
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedID: action.uid
      };
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authedID: ''
      };
    case FETCH_USER:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.message
      };
    case FETCH_USER_SUCCESS:
      return action.user === null
        ? {
          ...state,
          isFetching: false,
          error: ''
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action)
        };
    default:
      return state;
  }
}
