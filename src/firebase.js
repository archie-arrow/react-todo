import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD0qw6D7y6xBkdII_b9ZuXlbJn3-DoP_L4",
  authDomain: "react-todo-21de0.firebaseapp.com",
  projectId: "react-todo-21de0",
  storageBucket: "react-todo-21de0.appspot.com",
  messagingSenderId: "860332836225",
  appId: "1:860332836225:web:46298103de4e8c3554d480",
});

const db = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin(f) {
  firebase
    .auth()

    .signInWithPopup(provider)
    .then((res) => {
      const token = res.credential.accessToken;
      const user = res.user;

      f({ token, user });
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      return { errorCode, errorMessage };
    });
}

function googleSignout() {
  firebase
    .auth()
    .signOut()

    .then(
      function () {
        console.log("Signout Succesfull");
      },
      function (error) {
        console.log("Signout Failed");
      }
    );
}

export { db, googleSignin };
