import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlJKAbDUi9vjKAiHQozzLjyGGwOMT7crI",
  authDomain: "edu-kit-7a578.firebaseapp.com",
  databaseURL: "https://edu-kit-7a578-default-rtdb.firebaseio.com",
  projectId: "edu-kit-7a578",
  storageBucket: "edu-kit-7a578.appspot.com",
  messagingSenderId: "458672290154",
  appId: "1:458672290154:web:e3c127cbcb54deca280d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };