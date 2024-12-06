import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged , sendEmailVerification, signOut} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import {getFirestore ,collection, addDoc, getDocs , doc} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";





const firebaseConfig = {
  apiKey: "AIzaSyAt3pMVtotyYVdS8jZ0hnmGxUH8FVjl91U",
  authDomain: "web-app-210b3.firebaseapp.com",
  projectId: "web-app-210b3",
  storageBucket: "web-app-210b3.firebasestorage.app",
  messagingSenderId: "354418763892",
  appId: "1:354418763892:web:4cef148869fd359fd64921",
  measurementId: "G-D40X4KB9J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);





// export {createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification, signOut} 
export {auth ,createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification, getFirestore , signOut , collection, addDoc , db, getDocs , doc} 