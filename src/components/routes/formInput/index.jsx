import React from 'react';
import Register from './register';
import Authentication from './authentication';

const formInput = () => {
  return (
    <div className="group">
      <Authentication />
      <Register />
    </div>
  );
};

export default formInput;
