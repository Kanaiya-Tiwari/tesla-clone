// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw97i-tZvm98yekdoTUiEBvqiJcCfu0e8",
  authDomain: "tesla-clone-2a305.firebaseapp.com",
  projectId: "tesla-clone-2a305",
  storageBucket: "tesla-clone-2a305.appspot.com",
  messagingSenderId: "184654295030",
  appId: "1:184654295030:web:299cf9fd3961d5fc6e21d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);