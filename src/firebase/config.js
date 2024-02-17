// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK_zCRO6Vtm7Wdw82lRinRGAUq4cL0UM8",
  authDomain: "journalapp-c007c.firebaseapp.com",
  projectId: "journalapp-c007c",
  storageBucket: "journalapp-c007c.appspot.com",
  messagingSenderId: "736727461376",
  appId: "1:736727461376:web:6c3a3e1fa2c358d91e72e5"
};



// Initialize Firebase
export const firebaseAppJournal = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseAppJournal)

export const firebaseDB = getFirestore(firebaseAppJournal)