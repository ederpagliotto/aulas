import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  const [counter, setCounter] = useState(0);

  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}

export default App;
