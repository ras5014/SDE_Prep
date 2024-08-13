import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE-y6KxuOnhg0t2KyzC2zEupa56tOca3Q",
  authDomain: "personalfinanceapp-14da4.firebaseapp.com",
  projectId: "personalfinanceapp-14da4",
  storageBucket: "personalfinanceapp-14da4.appspot.com",
  messagingSenderId: "187139302560",
  appId: "1:187139302560:web:c41208fb9a7096a41095c5",
  measurementId: "G-2VG4R7R5YK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence);

export { db, auth };
export default app;
