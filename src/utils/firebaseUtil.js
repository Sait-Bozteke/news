import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyDeHOThuliJtrd9j8ErLnzWP5wGEUp5EzM",
  authDomain: "news-app-ee73b.firebaseapp.com",
  projectId: "news-app-ee73b",
  storageBucket: "news-app-ee73b.appspot.com",
  messagingSenderId: "353120584295",
  appId: "1:353120584295:web:3a1869f0460271ce264ac2"
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = (auth, email, password) => {
  signOut(auth);
};

export const loginWithGoogle = () => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {})
    .catch((error) => {
      console.log(error);
    });
};
