// Names.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNames } from '../services/names';


export default function Names() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const allContacts = await getNames();
    setContacts(allContacts);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="names-container">
      <h1>Contact Information</h1>
      <div className="contacts-container">
        {contacts.map((contact) => (
          <Link to={`/contacts/${contact._id}`} key={contact._id} className="contact-link">
            <div className="contact">
              <strong>Company:</strong> {contact.company}<br />
              <strong>Name:</strong> {contact.name}<br />

            </div>
          </Link>
        ))}
      </div>
      <Link to="/about">About</Link>
    </div>
  );
}
