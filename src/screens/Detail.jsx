import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getName, deleteName } from '../services/names.js';

export default function Detail() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchName();
  }, []);

  async function fetchName() {
    try {
      const oneName = await getName(id);
      setDetail(oneName);
    } catch (error) {
      console.error("Error fetching name:", error);
    }
  }

  async function handleDelete() {
    try {
      await deleteName(id);
      navigate('/name');
    } catch (error) {
      console.error("Error deleting name:", error);
    }
  }

  return (
    <div>
      <p>More information about the employees.</p>

      {detail && (
        <>
          <h2>Details for {detail.name}</h2>
          <img src={detail.picture} alt={detail.name} />
          <ul>
            <li>
              <strong>Name:</strong> {detail.name}<br />
              <strong>Address:</strong> {detail.address}<br />
              <strong>About:</strong> {detail.about}<br />

            </li>
          </ul>

          <button onClick={handleDelete}>Delete</button>

          <Link to={`/contacts/${id}/edit`}>Edit</Link>
        </>
      )}
    </div>
  );
}
