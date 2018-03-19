import { firebaseDB } from './constants';

// create
export const create = log => firebaseDB.ref(`logs/${log.day}`)
    .set(log)
    .then(() => log)
    .catch(error => error);

// read
export const read = () => firebaseDB.ref('/logs')
  .once('value', snapshot => snapshot)

// update

// delete
