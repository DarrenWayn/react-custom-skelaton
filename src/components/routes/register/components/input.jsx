import React from 'react';

const Input = props => {
  const { values, handleChange, inputForms } = props;
  return (
    <>
      {inputForms.map((input, index) => (
        <>
          <label>{input.label}</label>
          <input
            key={index}
            {...input}
            value={values[input.value]}
            onChange={handleChange}
          />
        </>
      ))}
    </>
  );
};

export default Input;
