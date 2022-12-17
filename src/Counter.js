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
      <h1>{counter}</h1>
      <button onClick={handleClick}>Add</button>
      <button onClick={handleClick}>Remove</button>
    </div>
  );
};

export default Counter;
