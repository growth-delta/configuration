import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function FactTable() {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/data/api/test/json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key: key, direction: direction });
  };

  return (
    <div>

      <h1>Fact Table React.js Application Example</h1>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>Id</th>
            <th className='text-center' onClick={() => handleSort('fact')}>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.Link}>
              <td>{item.id}</td>
              <td>{item.fact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default FactTable;