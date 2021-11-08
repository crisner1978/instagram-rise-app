// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCseCkWIQK_vgrwk_mJt5omI67LJcq3qc",
  authDomain: "insta-rise.firebaseapp.com",
  projectId: "insta-rise",
  storageBucket: "insta-rise.appspot.com",
  messagingSenderId: "538044078031",
  appId: "1:538044078031:web:15d7c3d7eb710fbc10e4ba",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app)
export const storage = getStorage(app)

