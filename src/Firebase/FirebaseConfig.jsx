// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKRxRw2nv0UqZTwVrJMxg6sB-90HaItiA",
  authDomain: "travel-guro-client.firebaseapp.com",
  projectId: "travel-guro-client",
  storageBucket: "travel-guro-client.appspot.com",
  messagingSenderId: "255763616203",
  appId: "1:255763616203:web:9e612e5763470d5495a64e",
  measurementId: "G-W55L9L0R9D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);