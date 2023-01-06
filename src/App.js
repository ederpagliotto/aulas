import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const App = () => {
  return (
    <div>
      <Titulo>Meu Titulo</Titulo>
      <Paragrafo>Meu paragrafo</Paragrafo>
    </div>
  );
};

export default App;
