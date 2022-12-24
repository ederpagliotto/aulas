import React from 'react';

const formFields = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
  },
  {
    id: 'zip',
    label: 'Zip Code',
    type: 'text',
  },
  {
    id: 'street',
    label: 'Street',
    type: 'text',
  },
  {
    id: 'town',
    label: 'Town',
    type: 'text',
  },
  {
    id: 'county',
    label: 'County',
    type: 'text',
  },
];

function App() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
    zip: '',
    street: '',
    town: '',
    county: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form>
      {formFields.map(({ id, label, type }) => (
        <div>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
    </form>
  );
}

export default App;
