// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ8WEd7_QFlqMy8i4Qy2NUYM-ILZ1vVdU",
  authDomain: "react-eccomerce-fb316.firebaseapp.com",
  projectId: "react-eccomerce-fb316",
  storageBucket: "react-eccomerce-fb316.appspot.com",
  messagingSenderId: "166382455965",
  appId: "1:166382455965:web:6e5826ca400cde400d5874" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)