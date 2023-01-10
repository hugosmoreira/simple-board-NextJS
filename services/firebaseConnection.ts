import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyD5tSNFFPfcmSxqdkXJnACK191AYxmzvMw",
  authDomain: "simple-board-2aeee.firebaseapp.com",
  projectId: "simple-board-2aeee",
  storageBucket: "simple-board-2aeee.appspot.com",
  messagingSenderId: "568126686902",
  appId: "1:568126686902:web:b818c2afd142a579628817",
  measurementId: "G-26SQNF77CG"
};
 
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
 
export default db


