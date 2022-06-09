// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc3sT0KJinz06WAQeGgKsC388LC_RuUFo",
  authDomain: "portfolio-9e55c.firebaseapp.com",
  projectId: "portfolio-9e55c",
  storageBucket: "portfolio-9e55c.appspot.com",
  messagingSenderId: "767791591837",
  appId: "1:767791591837:web:dcedcd0ab98bc80ab13f74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;