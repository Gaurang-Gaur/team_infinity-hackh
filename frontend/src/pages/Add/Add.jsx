import React, { useState } from 'react';
import './Add.css';

function Add() {
  const [name, setName] = useState('');
  const [manufacturingdate, setManufacturingdate] = useState(''); // String
  const [qty, setQty] = useState('');
  const [lastupdate, setLastupdate] = useState(0); // Number (assuming Unix timestamp)
  const [issuedate, setIssedate] = useState(0); // Number (assuming Unix timestamp)
  const [type, setType] = useState('');
  const [features, setFeatures] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement logic to submit form data (e.g., send to backend)
    console.log('Inventory form submitted:', {
      name,
      manufacturingdate,
      qty,
      lastupdate,
      issuedate,
      type,
      features,
    });

    try {
        const response = await fetch("http://localhost:3000/weapon", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            manufacturingdate,
            qty,
            lastupdate,
            issuedate,
            type,
            features,
          })
        });
      
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      
        const responseData = await response.json();
        console.log(responseData); // Handle response data as needed
      } catch (error) {
        console.error('Error:', error);
      }
      
    window.location.replace("http://localhost:5173/inventory");

    // Clear the form after submission (optional)
    setName('');
    setManufacturingdate('');
    setQty('');
    setLastupdate(0);
    setIssedate(0);
    setType('');
    setFeatures('');
  };

  return (
    <form className="inventory-form" onSubmit={handleSubmit}>
      <h2>Add Inventory</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="manufacturingdate">Manufacturing Date:</label>
        <input
          type="text"
          id="manufacturingdate"
          value={manufacturingdate}
          onChange={(e) => setManufacturingdate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="qty">Quantity:</label>
        <input
          type="number"
          id="qty"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastupdate">Last Updated:</label>
        <input
          type="number"
          id="lastupdate"
          value={lastupdate}
          onChange={(e) => setLastupdate(Number(e.target.value))} // Ensure numeric input
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="issuedate">Issued Date:</label>
        <input
          type="number"
          id="issuedate"
          value={issuedate}
          onChange={(e) => setIssedate(Number(e.target.value))} // Ensure numeric input
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <div className="form-value">
        <label htmlFor="features">Features:</label>
        <textarea
          id="features"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Inventory</button>
    </form>
  );
}

export default Add;
