import firebase from 'firebase';

// Initialize Firebase

const config = {
  apiKey: "AIzaSyCxcKbuNQSLmPkRbMkUclWMDmfpHp9nkUQ",
  authDomain: "mission-control-d4bb4.firebaseapp.com",
  databaseURL: "https://mission-control-d4bb4.firebaseio.com",
  projectId: "mission-control-d4bb4",
  storageBucket: "mission-control-d4bb4.appspot.com",
  messagingSenderId: "535104434656"
};

firebase.initializeApp(config);

export const firebaseDB = firebase.database();
export const auth = firebase.auth();
