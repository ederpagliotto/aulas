import React from 'react';

function App() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    // The event doesn't need to be on button
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default App;
