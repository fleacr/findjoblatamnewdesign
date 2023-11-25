// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBp8ll3jv-1HCPDx5jyY-qyQFZLkjO-Gk",
  authDomain: "find-job-latam-1700602911995.firebaseapp.com",
  projectId: "find-job-latam-1700602911995",
  storageBucket: "find-job-latam-1700602911995.appspot.com",
  messagingSenderId: "535558431997",
  appId: "1:535558431997:web:06de30ede8a2da64fb4a94",
  measurementId: "G-F95SDR5497"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);