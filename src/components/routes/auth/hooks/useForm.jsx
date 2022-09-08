import { getRegisterValues, getAuthenticationValues } from '../data/inputForms';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../../../services/firebase';

const useForm = data => {
  let navigate = useNavigate();
  // const [displayValues, setDisplayValues] = useState([]);
  const [values, setValues] = useState(data);
  const { displayName, email, password } = values;

  const registerInputFormValue = getRegisterValues(values);
  const AuthenticationInputFormValue = getAuthenticationValues(values);

  const resetValues = () => setValues(data);

  const handleSubmit = async e => {
    e.preventDefault();
    // password !== confirmPassword && alert('password do not match');
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetValues();
      if (!user) return;
    } catch (error) {
      error.code === 'auth/email-already-in-use'
        ? alert('Cannot create user, email already in use')
        : console.log('user creation encountered an error', error);
    }
  };

  const signIn = async e => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      if (!response) return;
      resetValues();
      navigate('/');
    } catch (error) {
      console.log(`There's is no user, you should sign up`);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!displayName) return;
  //   setDisplayValues(displayName);
  //   console.log(displayValues);
  //   navigate('/');

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // setValues({ ...values, [e.target.name]: e.target.value });
  // or

  // const name = e.target.name;
  // const value = e.target.value;
  // this.setState({[name]: value},
  // };

  return {
    handleSubmit,
    handleChange,
    signIn,
    values,
    registerInputFormValue,
    AuthenticationInputFormValue,
    // displayValues,
  };
};

export default useForm;
