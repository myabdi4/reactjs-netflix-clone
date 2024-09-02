import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBgxL5rE9W9DUG9W52aRSusU9Wk15TFwSI",
  authDomain: "reactjs-netflix-clone-2fc93.firebaseapp.com",
  projectId: "reactjs-netflix-clone-2fc93",
  storageBucket: "reactjs-netflix-clone-2fc93.appspot.com",
  messagingSenderId: "382856409856",
  appId: "1:382856409856:web:379aff9eebe4c6b374b9e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// user signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    console.log("User signed up successfully:", user.uid);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// user login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// LOG OUT FUNCTION
const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
