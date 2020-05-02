
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyD-5yRvO0y4jYVKRUO7ktGx9yLOv2LbqHY",
    authDomain: "crwn-db-68911.firebaseapp.com",
    databaseURL: "https://crwn-db-68911.firebaseio.com",
    projectId: "crwn-db-68911",
    storageBucket: "crwn-db-68911.appspot.com",
    messagingSenderId: "882259724974",
    appId: "1:882259724974:web:adabbfea542b00fca0fb3f",
    measurementId: "G-N5YYW14W9M"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  
