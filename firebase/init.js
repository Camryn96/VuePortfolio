// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYzFmXs5ctyhC621rDAnNJbktMKINQkaw",
  authDomain: "vueportfolio-38ac1.firebaseapp.com",
  projectId: "vueportfolio-38ac1",
  storageBucket: "vueportfolio-38ac1.appspot.com",
  messagingSenderId: "1067221739154",
  appId: "1:1067221739154:web:767e7f8035abfb6514684b"
};

// Initialize Firebase
const db = getFirestore()
export default db
const app = initializeApp(firebaseConfig);