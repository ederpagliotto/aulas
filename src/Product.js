import React from 'react';

function Product({ product }) {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (product !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  }, [product]);

  if (dados === null) return null;
  return (
    <div>
      <p>{dados.nome}</p>
      <p>$ {dados.preco}</p>
    </div>
  );
}

export default Product;
