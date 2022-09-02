import useForm from '../hooks/useForm';

const Input = () => {
  const { values, handleChange } = useForm();
  const { displayName, email, password, confirmPassword } = values;

  const inputForms = [
    {
      id: 1,
      label: 'Display Name',
      name: 'displayName',
      value: displayName,
      placeholder: 'your name here...',
      required: true,
      errormessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      type: 'text',
    },
    {
      id: 2,
      label: 'Email',
      name: 'email',
      value: email,
      placeholder: 'your email here...',
      errormessage: 'It should be a valid email address!',
      required: true,
      type: 'email',
    },
    {
      id: 3,
      label: 'Password',
      name: 'password',
      placeholder: 'Enter Password...',
      errormessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      value: password,
      required: true,
      type: 'password',
    },
    {
      id: 4,
      label: 'Confirm Password',
      name: 'confirmPassword',
      placeholder: 'Confirm Password...',
      errormessage: 'Confirm your password',
      value: confirmPassword,
      required: true,
      type: 'password',
      pattern: values.password,
    },
  ];

  return (
    <>
      {inputForms.map(input => (
        <>
          <label>{input.label}</label>
          <input {...input} onChange={handleChange} />
        </>
      ))}
    </>
  );
};

export default Input;
