import React, { useState, useEffect } from 'react';

function Fact() {

  const FACTS_API_URL = "http://127.0.0.1:8000/data/api/test/json";

  const [fact, setFact] = useState(null);

  async function fetchFacts() {
    const response = await fetch(FACTS_API_URL);
    const facts = await response.json();
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex].fact);
  }

  return (
    <div>

        <h1>Fact Generator React.js Application Example</h1>

        <br></br>

        <div className="container text-center">

        <div className="card p-4" style={{ height: '250px' }}>
            <div className="card-body">
            <h2 className="card-title">Random Fact Generator</h2>
            <div>
                <button className="btn btn-primary" onClick={fetchFacts}>
                    Generate Random Fact
                </button>
            </div>
            <hr />
            <p className="card-text fw-bolder">{fact}</p>
            </div>
        </div>

        </div>

        <br></br>

    </div>
  );
}

export default Fact;
