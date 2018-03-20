import { firebaseDB } from './constants';

// create
export const create = log => firebaseDB.ref(`logs/${log.day}`)
    .set(log)
    .then(() => log)
    .catch(error => error);

// read
export const readLogs = () => firebaseDB.ref('/logs')
  .once('value', snapshot => snapshot);

export const readLog = day => firebaseDB.ref(`/logs/${day}`)
  .once('value', snapshot => snapshot);

// update

export const updateLog = log => firebaseDB.ref('logs').child(`${log.day}`).update(log, () => log);

// delete
