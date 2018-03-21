import { auth } from './constants';

// Sign in
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();

export const onAuthStateChanged = (f) =>
  auth.onAuthStateChanged(f);

export const incognitoMode = () => auth.signInAnonymously()
