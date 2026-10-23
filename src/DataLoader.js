import React from 'react';

function DataLoader({ render }) {
  const data = ['Alice', 'Bob', 'Charlie'];

  return <div>{render(data)}</div>;
}

export default DataLoader;
