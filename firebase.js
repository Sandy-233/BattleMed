// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBZFnd7obuGU1e2kcCrfYHv7JNAAahogo",
  authDomain: "battlemed-7109d.firebaseapp.com",
  projectId: "battlemed-7109d",
  storageBucket: "battlemed-7109d.firebasestorage.app",
  messagingSenderId: "1032037330310",
  appId: "1:1032037330310:web:a92b4c853bef1827a3d007",
  measurementId: "G-GPHXFSS7SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { provider, signInWithPopup, signOut };
