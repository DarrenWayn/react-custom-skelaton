import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/firebase';

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Pop up</button>
    </>
  );
};

export default Authentication;
