import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyA7EgfAhN2-DNXGt99_mpQBijvUrEkClWg",
  authDomain: "fir-app-2271a.firebaseapp.com",
  projectId: "fir-app-2271a",
  storageBucket: "fir-app-2271a.firebasestorage.app",
  messagingSenderId: "505798730408",
  appId: "1:505798730408:web:d2bc10ab6e54bc07de989d"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
