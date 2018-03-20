export const TICK = 'TICK';
export const COUNT_DOWN_START = 'COUNT_DOWN_START';
export const COUNT_DOWN_END = 'COUNT_DOWN_END';

export function tick(diff){
  return {
    type: TICK,
    diff
  };
}

export function countdownStart(){
  return {
    type: COUNT_DOWN_START
  };
}

export function countDownEnd(){
  return {
    type: COUNT_DOWN_END
  };
}
