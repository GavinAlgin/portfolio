// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'portfolioga-83b3e',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MSG_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
