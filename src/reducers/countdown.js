import {
  COUNT_DOWN_START,
  COUNT_DOWN_END,
  TICK
} from '../actions/countdown';

const initialState = {
  isFinished: false,
  isOn: false,
  diff: null
};

export default function countdown(state=initialState, action){
  switch(action.type){
    case COUNT_DOWN_START:
      return {
        ...state,
        isOn: true
      };
    case COUNT_DOWN_END:
      return {
        ...state,
        isOn: false,
        isFinished: true
      };
    case TICK:
      return {
        ...state,
        diff: action.diff
      };
    default:
      return state;
  }
}
