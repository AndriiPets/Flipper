// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWk_rVo6ysCrPz0F0RyEu5WPR-rnRwgOM",
  authDomain: "instaclone-c3fdd.firebaseapp.com",
  projectId: "instaclone-c3fdd",
  storageBucket: "instaclone-c3fdd.appspot.com",
  messagingSenderId: "415184086215",
  appId: "1:415184086215:web:d968c74c2a45ff77b1cae2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }; 