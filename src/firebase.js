import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
    apiKey: "AIzaSyAJuT1A_KLJSUxV1q1vKgQXRo6brtI1hoo",
    authDomain: "super-opera-780df.firebaseapp.com",
    projectId: "super-opera-780df",
    storageBucket: "super-opera-780df.appspot.com",
    messagingSenderId: "863071980965",
    appId: "1:863071980965:web:7bcd1bff4396a23a412c4c",
    measurementId: "G-BWKZMNDLD9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()
  const functions = firebase.functions()

export {auth, db, storage, functions}
