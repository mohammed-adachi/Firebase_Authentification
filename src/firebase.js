import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "chat-ab746.firebaseapp.com",
//   projectId: "chat-ab746",
//   storageBucket: "chat-ab746.appspot.com",
//   messagingSenderId: "901216368405",
//   appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAGLLf79xNe8PB1evFQWfBBhmnLwSz3hrI",
  authDomain: "chat-5567c.firebaseapp.com",
  projectId: "chat-5567c",
  storageBucket: "chat-5567c.firebasestorage.app",
  messagingSenderId: "779402951029",
  appId: "1:779402951029:web:589c6d9cc8264e2f23bb3c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
