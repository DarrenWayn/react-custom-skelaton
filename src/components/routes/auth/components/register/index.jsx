import React from 'react';
import Input from '../input';
import useForm from '../../hooks/useForm';
import Button from '../../../../button';
import defaultRegisterValue from '../../constant/registerValue';

const Register = () => {
  const { values, registerInputFormValue, handleChange, handleSubmit } =
    useForm(defaultRegisterValue);
  return (
    <div className="register-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          values={values}
          handleChange={handleChange}
          inputForms={registerInputFormValue}
        />
        {/* <Button buttonType="inverted" type="submit">
          Sign Up
        </Button> */}
        <Button buttonType="inverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
