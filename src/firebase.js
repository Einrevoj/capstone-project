import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
//vac-coop-mikez firebase app
const firebaseConfig = {
  apiKey: "AIzaSyBtQiCvAkiFfHrKh84qMDDm_FUQucWrAJE",
  authDomain: "mini-project2-f24bf.firebaseapp.com",
  projectId: "mini-project2-f24bf",
  storageBucket: "mini-project2-f24bf.appspot.com",
  messagingSenderId: "1034567851386",
  appId: "1:1034567851386:web:d18ffae5cf7e90cb8a8ac3",
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleProvider };
