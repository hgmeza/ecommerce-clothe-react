import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDgezfaxt4nmigDJrTgJyoYMLLSZUh8jbc",
  authDomain: "ecommerce-clothing-reactjs.firebaseapp.com",
  databaseURL: "https://ecommerce-clothing-reactjs.firebaseio.com",
  projectId: "ecommerce-clothing-reactjs",
  storageBucket: "ecommerce-clothing-reactjs.appspot.com",
  messagingSenderId: "675471155285",
  appId: "1:675471155285:web:f2e8486f5d6bd6b46b74dc",
  measurementId: "G-R1Z07EMDE7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error creating user', error.message)
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
