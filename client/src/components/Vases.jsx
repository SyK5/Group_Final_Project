import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Vases.css';


const Vases = () => {
  const [vases, setVases] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/vases') // Ensure the API URL is correct
      .then((response) => {
        setVases(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the vases:', error);
      });
  }, []);

  return (
    <div>
      <h1>Vases Collection</h1>
      <div className="vases-container">
        {Array.isArray(vases) && vases.map((vase) => (
          <div key={vase.id} className="vase-item">
            <img src={vase.imageUrl} alt={vase.name} className="vase-image" />
            <h2>{vase.name}</h2>
            <p>{vase.description}</p>
            <p>Price: {vase.price}</p>
            <button onClick={() => console.log(`Add ${vase.name} to cart`)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vases;
