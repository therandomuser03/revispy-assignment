// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpbHW4qVz829wTGnSseeia1XBtuiaMcRs",
  authDomain: "simple-e-commerce-d4be8.firebaseapp.com",
  projectId: "simple-e-commerce-d4be8",
  storageBucket: "simple-e-commerce-d4be8.firebasestorage.app",
  messagingSenderId: "542296793190",
  appId: "1:542296793190:web:62106058a4e29fb8300da7",
  measurementId: "G-096FH2EKG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);