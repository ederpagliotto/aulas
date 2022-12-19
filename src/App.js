import React, { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook').then(
      (response) => response.json().then((json) => setData(json)),
    );
  }, []);

  return (
    <div>
      {data && (
        <div>
          {' '}
          <h1>{data.nome}</h1>
          <p>$ {data.preco * counter}</p>
        </div>
      )}
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
}

export default App;
