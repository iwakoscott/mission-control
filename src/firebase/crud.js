import { firebaseDB } from './constants';

// create
export const create = (log) => {
  return firebaseDB.ref('/logs/' + log.day).set(log);
}

// read

// update

// delete
