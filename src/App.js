import React from 'react';

function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    // The event doesn't need to be on button
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}

export default App;
