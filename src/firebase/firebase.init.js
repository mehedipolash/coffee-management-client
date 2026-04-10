// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoszVWhRTyrEUJEzRU4fAo-1Dpa2PmLH4",
  authDomain: "coffee-store-app-77cb4.firebaseapp.com",
  projectId: "coffee-store-app-77cb4",
  storageBucket: "coffee-store-app-77cb4.firebasestorage.app",
  messagingSenderId: "1041054413396",
  appId: "1:1041054413396:web:6b483f6a6bd73677f9f3c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
