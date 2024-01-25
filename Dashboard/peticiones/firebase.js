// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_-gJxLeeOz5goWGLmmAOuYU_XpVmMpFg",
  authDomain: "hrh-42ee1.firebaseapp.com",
  projectId: "hrh-42ee1",
  storageBucket: "hrh-42ee1.appspot.com",
  messagingSenderId: "1018261024468",
  appId: "1:1018261024468:web:7fb846c93782842db69541",
  measurementId: "G-KKFP311WXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth