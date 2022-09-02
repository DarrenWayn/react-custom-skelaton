import { useState } from 'react';

const defaultValue = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const useForm = () => {
  const [submit, setSubmit] = useState(false);
  const [values, setValues] = useState(defaultValue);
  // console.log(values);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    handleChange,
    handleSubmit,
    submit,
    values,
  };
};

export default useForm;
