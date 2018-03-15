import moment from 'moment';

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

export function parseTime(Date){
  const d = Date.getDay();
  return {
    day: getDayString(d),
    date: moment(Date.toISOString()).format('MM.DD.YY'),
    time: moment(Date.toISOString()).format('hh:mm:ss')
  };
} // parseTime
