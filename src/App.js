import React from 'react';

function App() {
  const [comments, setComments] = React.useState('');
  const [input, setInput] = React.useState([]);

  return (
    <div>
      <input type="text" value={comments} />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}

export default App;
