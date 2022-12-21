import React, { useState } from 'react';

function App() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  function handleClick() {
    setComments([...comments, input]);
  }

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
