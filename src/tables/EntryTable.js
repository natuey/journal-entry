import React from 'react';

const EntryTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Entry</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.entries.length > 0 ? (
        props.entries.map(entry => (
          <tr key={entry.id}>
            <td>{entry.name}</td>
            <td>{entry.entry}</td>
            <td>
              <button
                className='button muted-button'
                onClick={() => {
                  props.editEntry(entry);
                }}
              >
                Edit
              </button>
              <button
                className='button muted-button'
                onClick={() => props.deleteEntry(entry.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default EntryTable;
