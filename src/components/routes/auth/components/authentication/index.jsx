// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from '../../../../../services/firebase';
import useForm from '../../hooks/useForm';
import defaultAuthenticationValue from '../../constant/authenticationValue';
import Input from '../input';
import Button from '../../../../button';

const Authentication = () => {
  const { values, AuthenticationInputFormValue, handleChange, signIn } =
    useForm(defaultAuthenticationValue);
  const getUseDocRef = async user => await createUserDocumentFromAuth(user);
  // const getResponse = async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);

  //   return response ? getUseDocRef(response.user) : console.log('no user');
  // };

  // useEffect(() => getResponse, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    getUseDocRef(user);
  };

  return (
    <div className="authentication-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onClick={signIn}>
        <Input
          values={values}
          handleChange={handleChange}
          inputForms={AuthenticationInputFormValue}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
