// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSNq9BYqKRBTz2XW0ShOergoI7eGEj0t0",
  authDomain: "brettspielguru-8eebe.firebaseapp.com",
  databaseURL:
    "https://brettspielguru-8eebe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "brettspielguru-8eebe",
  storageBucket: "brettspielguru-8eebe.appspot.com",
  messagingSenderId: "763213882304",
  appId: "1:763213882304:web:13017cd32e15be2cf3de25",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const storage = firebase.storage().ref();
export const boardgameRef = databaseRef.child("boardgame");
export const gamesRef = databaseRef.child("games");

export default { firebase };
