import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/estilos.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZMMfUyx5vPzqsrhue9xry6guWrHQLq2o",
  authDomain: "proyecto-react-9ecbc.firebaseapp.com",
  projectId: "proyecto-react-9ecbc",
  storageBucket: "proyecto-react-9ecbc.appspot.com",
  messagingSenderId: "29570447782",
  appId: "1:29570447782:web:3c5df23c83ee6f26dfb767",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
