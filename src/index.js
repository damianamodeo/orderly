import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7UJ5XXULmjlUT28hGlDcedQ8-UPHW2xU",
  authDomain: "orderly-4bffa.firebaseapp.com",
  projectId: "orderly-4bffa",
  storageBucket: "orderly-4bffa.appspot.com",
  messagingSenderId: "1048111863868",
  appId: "1:1048111863868:web:43c6f0adcebb10c6504b39",
};

initializeApp(firebaseConfig); 

const dbfs = getFirestore()

const colRef = collection(dbfs, 'test')

// read firestore database to console
getDocs(colRef)
  .then((snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) =>{
      books.push({...doc.data(), id: doc.id})
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
