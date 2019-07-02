import React, { useState } from 'react';
import EntryTable from './tables/EntryTable';
import AddEntryForm from './forms/AddEntryForm';
import EditEntryForm from './forms/EditEntryForm';

const App = () => {
  const usersEntry = [
    { id: 1, name: 'Vanessa', entry: 'I Love MONGODB' },
    { id: 2, name: 'Tyson', entry: 'I Love EXPRESS' },
    { id: 3, name: 'Ben', entry: 'I Love REACT' },
    { id: 4, name: 'Nathan', entry: 'I Love NodeJs' }
  ];

  const [entries, setEntries] = useState(usersEntry);

  const addEntry = entry => {
    entry.id = entries.length + 1;
    setEntries([...entries, entry]);
  };

  const deleteEntry = id => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const [edit, setEdit] = useState(false);
  const initialFormState = {
    id: null,
    name: '',
    entry: ''
  };
  const [currentEntry, setCurrentEntry] = useState(initialFormState);

  const editEntry = entry => {
    setEdit(true);
    setCurrentEntry({
      id: entry.id,
      name: entry.name,
      entry: entry.entry
    });
  };

  const updateEntry = (id, updateEntry) => {
    setCurrentEntry(false);
    setEntries(entries.map(entry => (entry.id === id ? updateEntry : entry)));
  };

  return (
    <div className='container'>
      <h1>Journal Entry App with React</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {edit ? (
            <div>
              <h2>Edit Entry</h2>
              <EditEntryForm
                edit={edit}
                setEdit={setEdit}
                currentEntry={currentEntry}
                updateEntry={updateEntry}
              />
            </div>
          ) : (
            <div>
              <h2>Add Entry</h2>
              <AddEntryForm addEntry={addEntry} />
            </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>View Journal Entries</h2>
          <EntryTable
            entries={entries}
            editEntry={editEntry}
            deleteEntry={deleteEntry}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
