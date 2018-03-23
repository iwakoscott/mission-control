import { firebaseDB } from './constants';

// turn off auto updates
export const autoReadOff = () => firebaseDB.ref('logs').off();

// create
export const create = log => firebaseDB.ref(`logs`)
    .child(log.day)
    .set(log)
    .then(log => log)
    .catch(error => error);

// read
export const logsRefLimit = n => firebaseDB.ref('/logs')
  .limitToLast(n);

export const readLog = day => {
  const ref = firebaseDB.ref().child('logs').child(day);
  return ref.once('value');
}

// update
export const updateLog = log => firebaseDB.ref('logs').child(`${log.day}`).update(log)

// delete
export const deleteAllLogs = () => firebaseDB.ref().child('logs').remove();
