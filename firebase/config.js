// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCuintJLWutGtSMRyL5xtDtsgK6tzPDgU",
  authDomain: "itech-af5b1.firebaseapp.com",
  projectId: "itech-af5b1",
  storageBucket: "itech-af5b1.appspot.com",
  messagingSenderId: "1045510286986",
  appId: "1:1045510286986:web:6c58a5097dbed09c1c8773",
  measurementId: "G-88KRF1VWZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);