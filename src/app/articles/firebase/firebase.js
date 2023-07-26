import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCAXo8A7VJpDF9U6Y7BwMBZmq8tZlobNBM",
  authDomain: "news-app-8b3f7.firebaseapp.com",
  projectId: "news-app-8b3f7",
  storageBucket: "news-app-8b3f7.appspot.com",
  messagingSenderId: "428956525396",
  appId: "1:428956525396:web:ab7af8b1e639903901dec1",
  measurementId: "G-3EZ39N9ND9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);