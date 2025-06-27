// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  projectId: 'portfolioga-83b3e',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
