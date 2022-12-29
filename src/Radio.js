import React from 'react';

const Radio = ({ pergunta, options, id, resposta }) => {
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label>
          <input type="radio" value={option} />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
