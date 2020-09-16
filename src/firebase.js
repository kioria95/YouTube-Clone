// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAQpz49aKcVdbuaiEjpNZQNVcdrt889Q5c",
    authDomain: "clone-fa1a4.firebaseapp.com",
    databaseURL: "https://clone-fa1a4.firebaseio.com",
    projectId: "clone-fa1a4",
    storageBucket: "clone-fa1a4.appspot.com",
    messagingSenderId: "414585755731",
    appId: "1:414585755731:web:f52ca1f5aacd2286398ea6",
    measurementId: "G-BH0N9QX9N4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()

  export default db;