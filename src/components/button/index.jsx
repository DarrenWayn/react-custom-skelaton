import React from 'react';
import BUTTON_TYPE_CLASSES from './constant';

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Button;
