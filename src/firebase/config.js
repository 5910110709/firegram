import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBp0Sd6S5YQ7AfCi9Ms5FuZtfPqafNcoA4",
    authDomain: "harris-firegram.firebaseapp.com",
    databaseURL: "https://harris-firegram.firebaseio.com",
    projectId: "harris-firegram",
    storageBucket: "harris-firegram.appspot.com",
    messagingSenderId: "975336855224",
    appId: "1:975336855224:web:28e2bf77ef6ac7e537864d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp}