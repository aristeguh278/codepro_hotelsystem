// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiDhNtVUZP3gwnbJPQJgpce96cT6jjyVc",
  authDomain: "hotel-4ad5c.firebaseapp.com",
  databaseURL: "https://hotel-4ad5c-default-rtdb.firebaseio.com",
  projectId: "hotel-4ad5c",
  storageBucket: "hotel-4ad5c.appspot.com",
  messagingSenderId: "753032851550",
  appId: "1:753032851550:web:d31ddcd8c8bd25b89f84cf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
// export const db = getFirestore();
// export const auth = getAuth();
