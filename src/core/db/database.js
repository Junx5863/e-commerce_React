// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDvNolG9-noMGqWTTd12wSGhi97CcUwWU",
  authDomain: "e-commerce-react-d7d17.firebaseapp.com",
  projectId: "e-commerce-react-d7d17",
  storageBucket: "e-commerce-react-d7d17.appspot.com",
  messagingSenderId: "685381971631",
  appId: "1:685381971631:web:9bf39bda2a4679b65aae5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



 const db = getFirestore(app);

export { db }