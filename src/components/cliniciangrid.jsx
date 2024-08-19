import React from 'react';
import '../styles/gridtable.css'

// I will do something with this later.
const data = [
  { name: 'John Doe', age: 28, occupation: 'Engineer' },
  { name: 'Jane Smith', age: 34, occupation: 'Designer' },
  { name: 'Sam Johnson', age: 45, occupation: 'Manager' },
];

const columns = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Occupation', accessor: 'occupation' },
];
const GridTable = () => {
  return (
    <div className="grid-container">
      {/* Maps the header of the data */}
      {columns.map((column, index) => (
        <div key={index} className="grid-header">
          {column.Header}
        </div>
      ))}
      {/* creates the gui look  for the data */}
      {data.map((row, rowIndex) => (
        columns.map((column, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className="grid-item">
            {row[column.accessor]}
          </div>
        ))
      ))}
    </div>
  );
};
export default GridTable;
