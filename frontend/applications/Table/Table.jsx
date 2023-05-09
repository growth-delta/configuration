import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Table() {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/data/api/test/excel')
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
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th onClick={() => handleSort('Language')}>Language <i className="fa-solid fa-sort-down fa-2xs"></i></th>
          <th onClick={() => handleSort('Type')}>Type <i className="fa-solid fa-sort-down fa-2xs"></i></th>
          <th onClick={() => handleSort('Link')}>Link <i className="fa-solid fa-sort-down fa-2xs"></i></th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.Link}>
            <td>{item.Language}</td>
            <td>{item.Type}</td>
            <td><a href={item.Link} target='_blank' rel='noopener noreferrer'>{item.Link}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ReactDOM.render(
  <Table />,
  document.getElementById('table')
);
