import React from 'react';

const Radio = ({ pergunta, options, onChange, value, id }) => {
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input
            type="radio"
            id={id}
            onChange={onChange}
            checked={value === option}
            value={option}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
