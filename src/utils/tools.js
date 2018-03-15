import moment from 'moment';

export function getDay(x){
  switch(x) {
    case 0:
      return 'Monday';
    case 1:
      return 'Tuesday';
    case 2:
      return 'Wednesday';
    case 3:
      return 'Thursday';
    case 4:
      return 'Friday';
    case 5:
      return 'Saturday';
    case 6:
      return 'Sunday';
    default:
      return undefined;
  }
}

export function parseTime(Date){
  const d = Date.getUTCDay();
  return {
    day: getDay(d),
    date: moment(Date.toISOString()).format('MM.DD.YY'),
    time: moment(Date.toISOString()).format('hh:mm:ss')
  };
} // parseTime
