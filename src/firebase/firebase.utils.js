
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

  export const createUserProfileDocument=async (userAuth, additionalData) => {

    if(!userAuth){
      return;
    }
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    //console.log(snapShot);

    if(!snapShot.exists){
      const { displayName,email }=userAuth;
      const createdAt=new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })


      }
      catch(error){
        console.log('error creating user',error.message);
      }
    }


return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  
