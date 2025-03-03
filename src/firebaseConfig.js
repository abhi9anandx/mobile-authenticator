
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDLaDrSoGXpfhbq2rEpaVlVkWFZLjrdJM0",
  authDomain: "mobile-authentication-sy-cac13.firebaseapp.com",
  projectId: "mobile-authentication-sy-cac13",
  storageBucket: "mobile-authentication-sy-cac13.appspot.com",
  messagingSenderId: "9857057162",
  appId: "1:9857057162:web:6bfc86bd86705c9f32c873",
  measurementId: "G-PNMJM2VP7R"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };