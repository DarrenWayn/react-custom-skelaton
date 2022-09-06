import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../../../../services/firebase';

const useForm = data => {
  // let navigate = useNavigate();
  // const [displayValues, setDisplayValues] = useState('');
  const [values, setValues] = useState(data);
  const { displayName, email, password, confirmPassword } = values;
  console.log(values);

  const inputForms = [
    {
      id: 1,
      label: 'Display Name',
      name: 'displayName',
      value: displayName,
      // placeholder: 'your name here...',
      title:
        "Username should be 3-16 characters and shouldn't include any special character!",
      // pattern: '^[A-Za-z0-9]{3,16}$',
      type: 'text',
    },
    {
      id: 2,
      label: 'Email',
      name: 'email',
      value: email,
      // placeholder: 'your email here...',
      title: 'It should be a valid email address!',
      // pattern: '[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+.[a-z]{2,}',
      type: 'email',
    },
    {
      id: 3,
      label: 'Password',
      name: 'password',
      // placeholder: 'Enter Password...',
      title: 'Must be at least 6 characters',
      // pattern: '[a-zA-Z0-9]{8,}',
      value: password,
      type: 'password',
    },
    {
      id: 4,
      label: 'Confirm Password',
      name: 'confirmPassword',
      // placeholder: 'Confirm Password...',
      title: values.password
        ? 'You\r password don\t match'
        : 'Confirm your password',
      value: confirmPassword,
      type: 'password',
      pattern: values.password,
    },
  ];

  const resetValues = () => setValues(data);

  const handleSubmit = async e => {
    e.preventDefault();
    password !== confirmPassword && alert('password do not match');
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

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!displayName) return;
  //   setDisplayValues(displayName);
  //   console.log(displayValues);
  //   navigate('/');
  // };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

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
    values,
    inputForms,
    // displayValues,
  };
};

export default useForm;
