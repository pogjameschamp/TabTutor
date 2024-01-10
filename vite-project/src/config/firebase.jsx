// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSuHdgOsuqjHawPvrXEfj9opGMEg4mcZY",
  authDomain: "flashcards-472ea.firebaseapp.com",
  projectId: "flashcards-472ea",
  storageBucket: "flashcards-472ea.appspot.com",
  messagingSenderId: "727752906431",
  appId: "1:727752906431:web:54e8790161cce4495c580a",
  measurementId: "G-0M4BKP4SSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);