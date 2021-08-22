import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyD0qw6D7y6xBkdII_b9ZuXlbJn3-DoP_L4",
  authDomain: "react-todo-21de0.firebaseapp.com",
  projectId: "react-todo-21de0",
  storageBucket: "react-todo-21de0.appspot.com",
  messagingSenderId: "860332836225",
  appId: "1:860332836225:web:46298103de4e8c3554d480",
});

const db = firebase.firestore();

export { db };
