// Contact.js
import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching from an API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Contact Us</h1>
      {data ? (
        <p>{data.title}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Contact;
