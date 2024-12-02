// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8skdxEjPh8rpE2bI9-h8FALc1oMeKY2M",
  authDomain: "worldshorts-19fbc.firebaseapp.com",
  projectId: "worldshorts-19fbc",
  storageBucket: "worldshorts-19fbc.firebasestorage.app",
  messagingSenderId: "743628325773",
  appId: "1:743628325773:web:5e429edc1a66a67455f3c4",
  measurementId: "G-PWVR3QK3DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
