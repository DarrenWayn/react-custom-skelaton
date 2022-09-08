import React from 'react';

const Input = props => {
  const { handleChange, inputForms } = props;
  return (
    <>
      {inputForms.map((input, index) => (
        <div className="group">
          <input
            className="form-input"
            key={index}
            {...input}
            // name={input.name}
            // type={input.type}
            // title={input.title}
            // value={values[input.value]}
            onChange={handleChange}
            required
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
        </div>
      ))}
    </>
  );
};

export default Input;
