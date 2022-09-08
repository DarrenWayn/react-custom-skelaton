export const getRegisterValues = values => {
  const { displayName, email, password, confirmPassword } = values;

  const registerInputForms = [
    {
      id: 1,
      label: 'Display Name',
      name: 'displayName',
      value: displayName,
      // placeholder: 'your name here...',
      title:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: '^[A-Za-z0-9]{3,16}$',
      type: 'text',
    },
    {
      id: 2,
      label: 'Email',
      name: 'email',
      value: email,
      // placeholder: 'your email here...',
      title: 'It should be a valid email address!',
      pattern: '[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+.[a-z]{2,}',
      type: 'email',
    },
    {
      id: 3,
      label: 'Password',
      name: 'password',
      // placeholder: 'Enter Password...',
      title: 'Must be at least 6 characters',
      pattern: '[a-zA-Z0-9]{8,}',
      value: password,
      type: 'password',
    },
    {
      id: 4,
      label: 'Confirm Password',
      name: 'confirmPassword',
      // placeholder: 'Confirm Password...',
      title: !password ? `You're password don't match` : '',
      value: confirmPassword,
      type: 'password',
      pattern: password,
    },
  ];

  return registerInputForms;
};

export const getAuthenticationValues = values => {
  const { email, password } = values;

  const authenticationInputForms = [
    {
      id: 1,
      label: 'Email',
      name: 'email',
      value: email,
      // placeholder: 'your email here...',
      title: 'It should be a valid email address!',
      pattern: '[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+.[a-z]{2,}',
      type: 'email',
    },
    {
      id: 2,
      label: 'Password',
      name: 'password',
      // placeholder: 'Enter Password...',
      title: 'Must be at least 6 characters',
      pattern: '[a-zA-Z0-9]{8,}',
      value: password,
      type: 'password',
    },
  ];

  return authenticationInputForms;
};
