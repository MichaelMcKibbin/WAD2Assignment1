//==============================
// FIREBASE
//==============================
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBeqAN2yExTlxRUgyM459JiR-EmVPIzf5M",
  authDomain: "wad2-assignment-1.firebaseapp.com",
  projectId: "wad2-assignment-1",
  storageBucket: "wad2-assignment-1.appspot.com",
  messagingSenderId: "1031983813431",
  appId: "1:1031983813431:web:85c6af1fa24904eb7600b2",
  measurementId: "G-BK447318VD",
});

// const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export default app;
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
