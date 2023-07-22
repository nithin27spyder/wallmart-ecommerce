


import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDa3idpYc_ioWwmHYXODVoDyVoeO4I4GbI",
  authDomain: "wallmart-d7426.firebaseapp.com",
  projectId: "wallmart-d7426",
  storageBucket: "wallmart-d7426.appspot.com",
  messagingSenderId: "196568306555",
  appId: "1:196568306555:web:dcf488f6554cb3ecab63de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;