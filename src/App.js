import React from 'react';
import Input from './Input';

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <div>
      <Input label={'Nome'} value={nome} setValue={setNome} />
      <Input label={'Email'} value={email} setValue={setEmail} />
    </div>
  );
}

export default App;
