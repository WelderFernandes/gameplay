import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCQVvD44LGJ2Jm8CT3M7NSfDmUx-ByiuXc",
  authDomain: "gameplay-27ab8.firebaseapp.com",
  projectId: "gameplay-27ab8",
  storageBucket: "gameplay-27ab8.appspot.com",
  messagingSenderId: "597733228136",
  appId: "1:597733228136:web:ecadb36a7a087ea07ec5dd",
  measurementId: "G-1JGT07R49P",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
const firestore = firebase.firestore();

export { firestore, firebase, auth, database };
