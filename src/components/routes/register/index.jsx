import React from 'react';
import Input from './components/input';
import Home from '../home';
import useForm from './hooks/useForm';

import { createAuthUserWithEmailAndPassword } from '../../../services/firebase';

const Register = () => {
  const { submit, handleSubmit } = useForm();
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        {!submit ? <Input /> : <Home />}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
