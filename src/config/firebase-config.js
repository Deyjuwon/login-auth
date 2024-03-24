import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyAScdeuz2dQBOzOBNZxUE6c6rz8iMK5-ns",
  authDomain: "login-auth-5f6e7.firebaseapp.com",
  projectId: "login-auth-5f6e7",
  storageBucket: "login-auth-5f6e7.appspot.com",
  messagingSenderId: "1063141128812",
  appId: "1:1063141128812:web:75e3bbca8eb15a2c97f649",
  measurementId: "G-6R607FXZN8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
