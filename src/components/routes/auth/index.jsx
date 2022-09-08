import React from 'react';
import Register from './components/register';
import Authentication from './components/authentication';

const Auth = () => {
  return (
    <div className="group">
      <Authentication />
      <Register />
    </div>
  );
};

export default Auth;
