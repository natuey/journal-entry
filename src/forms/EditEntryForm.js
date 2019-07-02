import React, { useState, useEffect } from 'react';

const EditEntryForm = props => {
  const [entry, setEdit] = useState(props.currentEntry);

  useEffect(() => {
    setEdit(props.currentEntry);
  }, [props]);

  const InputChange = event => {
    const { name, value } = event.target;
    setEdit({ ...entry, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateEntry(entry.id, entry);
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
        type='text'
        name='entry'
        value={entry.entry}
        onChange={InputChange}
      />
      <button>Update Entry</button>
      <button
        onClick={() => props.setEdit(false)}
        className='button muted-button'
      >
        Cancel
      </button>
    </form>
  );
};

export default EditEntryForm;
