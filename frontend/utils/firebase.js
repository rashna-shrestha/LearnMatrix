// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginlearnmatrix.firebaseapp.com",
  projectId: "loginlearnmatrix",
  storageBucket: "loginlearnmatrix.firebasestorage.app",
  messagingSenderId: "306150372501",
  appId: "1:306150372501:web:0b25d12352a92824cf579c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}