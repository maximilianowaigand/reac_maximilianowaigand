// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbRHQvpTnJKDMWgmpoqZZ3oKbYWZ45zA0",
  authDomain: "proyecto-e6a5c.firebaseapp.com",
  projectId: "proyecto-e6a5c",
  storageBucket: "proyecto-e6a5c.appspot.com",
  messagingSenderId: "1058948395598",
  appId: "1:1058948395598:web:8b8404e188c7a97e0b891f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)