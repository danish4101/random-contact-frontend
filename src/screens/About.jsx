
import React, { useState, useEffect } from 'react';

export default function About() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://random-data-api-50875b874049.herokuapp.com/api/');
        const data = await response.json();
        setWorkers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>About</h1>
      <p>More information about the employees.</p>

      <h2></h2>
      <ul>
        {workers.map((worker) => (
          <li key={worker.id}>
            <strong>Name:</strong> {worker.name}<br />
            <strong>About:</strong> {worker.about}<br />
            {/* Other worker information */}
          </li>
        ))}
      </ul>
    </div>
  );
}
