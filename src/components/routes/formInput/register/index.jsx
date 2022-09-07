import React from 'react';
import Input from './components/input';
import useForm from './hooks/useForm';
import Button from '../../../button';
import defaultRegisterValue from './constant';

const Register = () => {
  const { values, inputForms, handleChange, handleSubmit } =
    useForm(defaultRegisterValue);
  return (
    <div className="register-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          values={values}
          handleChange={handleChange}
          inputForms={inputForms}
        />
        <Button buttonType="inverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
