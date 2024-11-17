// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9iMhtf-NOXWuTpvuZglcHk1MfHQf4n1o",
  authDomain: "second-project-d818b.firebaseapp.com",
  projectId: "second-project-d818b",
  storageBucket: "second-project-d818b.firebasestorage.app",
  messagingSenderId: "675983861630",
  appId: "1:675983861630:web:7709a0efdd66771f2fb52f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
