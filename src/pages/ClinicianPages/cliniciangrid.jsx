import React, { useState } from 'react';
import axios from 'axios';

const TableData = () => {
  const [tableName, setTableName] = useState('');
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/data/${tableName}`);
      setColumns(response.data.columns);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
        placeholder="Enter table name"
      />
      <button onClick={fetchData}>Get Data</button>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.COLUMN_NAME}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col.COLUMN_NAME]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
