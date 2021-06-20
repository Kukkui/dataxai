import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALgGU76rWPWUpO5Qne3iPN-27Ba5BIWgQ",
    authDomain: "dataxai.firebaseapp.com",
    projectId: "dataxai",
    storageBucket: "dataxai.appspot.com",
    messagingSenderId: "929125961299",
    appId: "1:929125961299:web:41ebd91f53359244d400a6",
    measurementId: "G-S1D6Z70QWF"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;