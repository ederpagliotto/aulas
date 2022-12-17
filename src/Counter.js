import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(1);

  function handleClick(event) {
    if (event.target.innerText === 'Add') {
      setCounter(counter + 1);
    } else if (event.target.innerText === 'Remove') {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <h1 style={{ margin: '1rem', color: 'green' }}>{counter}</h1>
      <button onClick={handleClick} style={{ margin: '1rem' }}>
        Add
      </button>
      <button onClick={handleClick} style={{ margin: '1rem' }}>
        Remove
      </button>
    </div>
  );
};

export default Counter;
