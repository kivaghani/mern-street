// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "foodclub-heystreet.firebaseapp.com",
  projectId: "foodclub-heystreet",
  storageBucket: "foodclub-heystreet.appspot.com",
  messagingSenderId: "767410434312",
  appId: "1:767410434312:web:cff094211ff5d355dbfcbd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);