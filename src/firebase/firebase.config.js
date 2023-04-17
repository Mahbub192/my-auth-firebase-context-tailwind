// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXbDItVoLxsvLh9h_rpn_bG-WtNb_gN0s",
  authDomain: "my-auth-firebase-context.firebaseapp.com",
  projectId: "my-auth-firebase-context",
  storageBucket: "my-auth-firebase-context.appspot.com",
  messagingSenderId: "575743338712",
  appId: "1:575743338712:web:d01ce5759000dd2fca8fad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;