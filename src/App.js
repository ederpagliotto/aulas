import React, { useRef, useState } from 'react';

function App() {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notification, setNotification] = React.useState(null);
  const timeOutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotification('Item Adicionado ao carrinho');

    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      setNotification(null);
    }, 2000);
  }

  return (
    <div>
      <p>{notification}</p>
      <button onClick={handleClick}>Carrinho {carrinho}</button>
    </div>
  );
}

export default App;
