import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSNq9BYqKRBTz2XW0ShOergoI7eGEj0t0",
  authDomain: "brettspielguru-8eebe.firebaseapp.com",
  projectId: "brettspielguru-8eebe",
  storageBucket: "brettspielguru-8eebe.appspot.com",
  messagingSenderId: "763213882304",
  appId: "1:763213882304:web:ffc6e321736c2c61f3de25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
