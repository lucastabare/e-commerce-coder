// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKnKTomO0IzXt8IIv7K79e0cua49eCWIQ",
  authDomain: "ecomerce-coder-3f70a.firebaseapp.com",
  projectId: "ecomerce-coder-3f70a",
  storageBucket: "ecomerce-coder-3f70a.appspot.com",
  messagingSenderId: "186977885781",
  appId: "1:186977885781:web:c7a93b325623186bbbfedc",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
