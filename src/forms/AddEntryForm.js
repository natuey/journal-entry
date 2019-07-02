import React, { useState } from 'react';

const AddEntryForm = props => {
  const initialFormState = {
    id: null,
    name: '',
    entry: ''
  };

  const [entry, addEntry] = useState(initialFormState);

  const InputChange = e => {
    const { name, value } = e.target;

    addEntry({ ...entry, [name]: value });
  };

  //   onFormSubmit = event => {
  //     event.preventDefault();
  //     if (!user.name || !user.entry) return;
  //     props.addUser(user);
  //     setUser(initialFormState);
  //   };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!entry.name || !entry.entry) return;

        props.addEntry(entry);
        addEntry(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={entry.name}
        onChange={InputChange}
      />
      <label>Entry</label>
      <textarea
        type='textarea'
        name='entry'
        value={entry.entry}
        onChange={InputChange}
      />
      <button>Add new Entry</button>
    </form>
  );
};

export default AddEntryForm;
