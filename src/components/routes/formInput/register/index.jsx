import React from 'react';
import Input from './components/input';
import useForm from './hooks/useForm';

const Register = () => {
  const { values, inputForms, handleChange, handleSubmit } = useForm();
  return (
    <>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          values={values}
          handleChange={handleChange}
          inputForms={inputForms}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Register;
