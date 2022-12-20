import React from 'react';
import Product from './Product';

function App() {
  const [product, setProduct] = React.useState(null);

  // Efeito aconece somente uma vez, por isso que [] esta vazia
  React.useEffect(() => {
    const localProduct = window.localStorage.getItem('product');
    if (localProduct !== null) setProduct(localProduct);
  }, []);

  // efeito aplicado em [produto] sempre que ele for modificado
  React.useEffect(() => {
    if (product !== null) window.localStorage.setItem('product', product);
  }, [product]); //sempre que o produto for modificado o que esta na funcao acontece nele

  //funcao de clique
  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  return (
    <div>
      <h1>Preference: {product}</h1>
      <button onClick={handleClick} style={{ margin: '1rem' }}>
        Notebook
      </button>
      <button onClick={handleClick}>Smartphone</button>
      <Product product={product} />
    </div>
  );
}

export default App;
