import moment from 'moment';

const getHands = () => ['hours', 'minutes', 'seconds', 'timerFinished'];

export function getDayString(x){
  switch(x) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return undefined;
  }
}

export function parseDateTime(Date){
  const d = Date.getDay();
  return {
    day: getDayString(d),
    date: moment(Date.toISOString()).format('MM.DD.YY'),
    time: moment(Date.toISOString()).format('H:mm:ss')
  };
} // parseDateTime


export function parseTime(diffMS){
  let leftover = diffMS;
  return getHands().reduce((init, key) => {
    switch(key){
      case 'hours':
        init[key] = Math.floor(leftover / 60 / 60 / 1000);
        leftover -= init[key]*60*60*1000;
        break;
      case 'minutes':
        init[key] = Math.floor(leftover / 60 / 1000);
        leftover -= init[key]*60*1000;
        break;
      case 'seconds':
        init[key] = Math.floor(leftover / 1000);
        leftover -= init[key]*1000;
        break;
      default:
        init[key] = !init['hours'] && !init['minutes'] && !init['seconds'];
        break;
    }
    return init;
  }, {});
}
