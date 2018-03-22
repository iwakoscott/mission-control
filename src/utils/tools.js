import moment from 'moment';

const getHands = () => ['hours', 'minutes', 'seconds', 'timerFinished'];

export function getDayString(x){
  switch(x) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
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

export function formatUserData(displayName, photoURL, uid){
  return {
    displayName,
    photoURL,
    uid
  };
}

export function formatAnonymousUserData(uid){
  return {
    uid,
    isAnonymous: true
  };
}

export function formatTweet(day, title){
  return `Day ${day}: ${title} https://goo.gl/crf9F8`;
}

export const formatedTimeStamp = (timeStamp) => moment(new Date(timeStamp)).format('MM.DD.YY @ H:mm:ss');
