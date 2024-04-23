// Import the functions you need from the SDKs you need
const { initializeApp, err } = require("firebase/app");
const {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  query,
} = require("firebase/firestore");
const { getAuth } = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE-y6KxuOnhg0t2KyzC2zEupa56tOca3Q",
  authDomain: "personalfinanceapp-14da4.firebaseapp.com",
  projectId: "personalfinanceapp-14da4",
  storageBucket: "personalfinanceapp-14da4.appspot.com",
  messagingSenderId: "187139302560",
  appId: "1:187139302560:web:c41208fb9a7096a41095c5",
  measurementId: "G-2VG4R7R5YK",
};

// Initialize Firebase

const initializeFirebaseApp = () => {
  try {
    const app = initializeApp(firebaseConfig);
    const fireStoreDb = getFirestore();
    const googleAuth = getAuth(app);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  initializeFirebaseApp,
};
