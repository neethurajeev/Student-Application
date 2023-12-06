import React from 'react';


const Lists = () => {
  const columnStyle = {
    width: '200px',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    position: 'fixed',
    left: 0,
    top: 0,
    padding: '20px',
    boxSizing: 'border-box',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    marginTop:"80px"
  };

  const listItemStyle = {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  return (
    <div style={columnStyle}>
      <ul style={listStyle}>
        <li style={listItemStyle}>List 1</li>
        <li style={listItemStyle}>List 2</li>
        <li style={listItemStyle}>List 3</li>
      </ul>
    </div>
  );
};

export default Lists;
