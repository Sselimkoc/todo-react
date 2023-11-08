import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCY4T14lYZnjgO_OHhx1AtJw7QgekIk370",
  authDomain: "no-tomorrow-b1a82.firebaseapp.com",
  projectId: "no-tomorrow-b1a82",
  databaseURL: "https://no-tomorrow-b1a82-default-rtdb.firebaseio.com/",
  storageBucket: "no-tomorrow-b1a82.appspot.com",
  messagingSenderId: "974862683742",
  appId: "1:974862683742:web:8ea9738e3d60448e142ecf",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export { database, db };
