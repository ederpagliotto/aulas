import React, { useRef, useState } from 'react';

function App() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  const inputElement = useRef();
  function handleClick() {
    setComments([...comments, input]);
    setInput('');
    inputElement.current.focus();
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
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
