import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Fact from './components/Fact.jsx';
import FactTable from './components/FactTable.jsx';

function FactGenerator() {
  const [displayTable, setDisplayTable] = useState(false);
  const [fact, setFact] = useState(null);

  const toggleDisplay = () => {
    setDisplayTable(!displayTable);
  }

  const fetchFacts = async () => {
    const response = await fetch("http://127.0.0.1:8000/data/api/test/json");
    const facts = await response.json();
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex].fact);
  }

  return (
    <div>
      <h2>This React app has two states Generator and Table, which both fetch data from the API: Facts</h2>
      <br />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${!displayTable && 'active'}`} onClick={toggleDisplay}>
            Generate Random Fact
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${displayTable && 'active'}`} onClick={toggleDisplay}>
            View Fact Table
          </button>
        </li>
      </ul>

      <br />

      {displayTable ? <FactTable /> : <Fact fetchFacts={fetchFacts} fact={fact} />}

    </div>
  );
}

ReactDOM.render(
  <FactGenerator />,
  document.getElementById('root')
);
