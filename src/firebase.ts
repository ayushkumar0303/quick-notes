// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(import.meta.env.VITE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "quick-notes-bf6d2.firebaseapp.com",
  projectId: "quick-notes-bf6d2",
  storageBucket: "quick-notes-bf6d2.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

// ✅ Export Auth
export const auth = getAuth(app);
