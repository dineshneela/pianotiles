import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCJSTvOCbyjXLH9S0zb6Z3zzzjPMf6FnG4",
    authDomain: "piano-tiles-416b5.firebaseapp.com",
    projectId: "piano-tiles-416b5",
    storageBucket: "piano-tiles-416b5.appspot.com",
    messagingSenderId: "221105945898",
    appId: "1:221105945898:web:2be5cab3d05dc5a7cc7253"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();