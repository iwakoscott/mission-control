import { firebaseDB } from './constants';

// create
export const create = log => firebaseDB.ref(`logs/${log.day}`)
    .set(log)
    .then(() => log)
    .catch(error => error);

// read
export const readLogs = n => firebaseDB.ref('/logs').limitToLast(n).once('value')

export const readLog = day => {
  const ref = firebaseDB.ref().child('logs').child(day);
  return ref.once('value');
}

// update
export const updateLog = log => firebaseDB.ref('logs').child(`${log.day}`).update(log)

// delete
