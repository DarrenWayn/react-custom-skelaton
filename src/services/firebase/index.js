// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5IyLNyRPW67pD4f8qICDjuLZkVgDhJ0Y',
  authDomain: 'crown-react-app-4139a.firebaseapp.com',
  projectId: 'crown-react-app-4139a',
  storageBucket: 'crown-react-app-4139a.appspot.com',
  messagingSenderId: '925750188047',
  appId: '1:925750188047:web:fca7f3b874025c4945eb7a',
  measurementId: 'G-LC0HV33J93',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Call google provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Get the auth that store in auth variable
export const auth = getAuth();

// signInWithPopup that pass 2 argument which is auth and provider
// and store in signInWithGooglePopup variable and exported
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// signInWithRedirect that pass 2 argument which is auth and provider
// and store in signInWithGoogleRedirect variable and exported
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// get the database from firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  // if we don't get the userAuth we don't want this to run
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  // destructure userAuth Object
  const { displayName, email } = userAuth;

  // Declare variable
  const createdAt = new Date();
  const error = 'error createing the user';

  // if user data exists or not using ! operator
  // which return boolean true or false
  !userSnapshot.exists()
    ? await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      })
    : console.log(error);

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  // this method will never call if theres not email and pass
  return await createUserWithEmailAndPassword(auth, email, password);
};
