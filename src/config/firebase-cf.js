import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
 
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export { database, db };
