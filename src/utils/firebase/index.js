// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

// Get the auth that store in auth variable
export const auth = getAuth();

// signInWithPopup that pass 2 argument which is auth and provider
// and store in signInWithGooglePopup variable and exported
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
