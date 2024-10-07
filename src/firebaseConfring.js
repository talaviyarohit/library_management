// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLkf__8b1WKmfojVu_vnGZ8QvsjySGLdM",
  authDomain: "flipkart-clone-c1460.firebaseapp.com",
  projectId: "flipkart-clone-c1460",
  storageBucket: "flipkart-clone-c1460.appspot.com",
  messagingSenderId: "531316356785",
  appId: "1:531316356785:web:681a847fdbc9d295569490"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app) 
export const db = getFirestore(app)
export const auth = getAuth(app);