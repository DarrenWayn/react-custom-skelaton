import React from 'react';
import Input from './components/input';
import useForm from './hooks/useForm';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const onPress = () => navigate('Routes', { displayValues });
  const { values, displayValues, inputForms, handleChange, handleSubmit } =
    useForm();
  return (
    <div className="register">
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <Input
          values={values}
          handleChange={handleChange}
          inputForms={inputForms}
        />
        <button type="submit" onPress={onPress}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
