
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {

  apiKey: "AIzaSyBrjBGJvgjSd07JBgUeVxerYmWwmfjSqjI",

  authDomain: "copy-99077.firebaseapp.com",

  projectId: "copy-99077",

  storageBucket: "copy-99077.appspot.com",

  messagingSenderId: "439063843360",

  appId: "1:439063843360:web:8e66018fa459b3e70fa245"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

