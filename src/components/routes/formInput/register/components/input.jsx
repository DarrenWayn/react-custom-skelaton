import React from 'react';

const Input = props => {
  const { values, handleChange, inputForms } = props;
  return (
    <div className="group">
      {inputForms.map(input => (
        <>
          <input
            className="form-input"
            {...input}
            value={values[input.value]}
            onChange={handleChange}
          />
          {input.label && (
            <label
              className={`${
                input.value.length ? 'shrink' : ''
              }form-input-label`}
            >
              {input.label}
            </label>
          )}
        </>
      ))}
    </div>
  );
};

export default Input;
