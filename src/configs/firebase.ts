import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAFMSB56kd5RmvtG84g6GEWESx8xZsoG_c",
  authDomain: "game-play-42482.firebaseapp.com",
  projectId: "game-play-42482",
  storageBucket: "game-play-42482.appspot.com",
  messagingSenderId: "71746390607",
  appId: "1:71746390607:web:b6fb58b01f68ff570af83a",
  measurementId: "G-T97KC6NZ0R",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
const firestore = firebase.firestore();

export { firestore, firebase, auth, database };
