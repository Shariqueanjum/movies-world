// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKJ22ZB_OqHZMQvTFqGc5iDbMOL2JizNM",
  authDomain: "movies-zone-a2ca9.firebaseapp.com",
  projectId: "movies-zone-a2ca9",
  storageBucket: "movies-zone-a2ca9.appspot.com",
  messagingSenderId: "374472927848",
  appId: "1:374472927848:web:0b47083a2110c6f13969dd",
  measurementId: "G-KX303M8NCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();