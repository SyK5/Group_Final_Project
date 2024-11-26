import { useEffect, useState } from 'react';
import axios from 'axios';
import './Vases.css';

const Vases = () => {
  const [vases, setVases] = useState([]);
  const [selectedType, setSelectedType] = useState('antique'); // Default to 'antique'

  useEffect(() => {
    // Determine the endpoint based on the selected vase type
    const endpoint = selectedType === 'antique' 
      ? 'http://localhost:3000/api/antique-vases' 
      : 'http://localhost:3000/api/modern-vases';

    axios.get(endpoint)
      .then((response) => {
        setVases(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the vases:', error);
      });
  }, [selectedType]); // Re-fetch data whenever `selectedType` changes

  return (
    <div>
      <h1>Vases Collection</h1>
      
      {/* Vase Type Selector */}
      <div className="vase-type-selector">
        <button 
          className={selectedType === 'antique' ? 'active' : ''} 
          onClick={() => setSelectedType('antique')}
        >
          Antique Vases
        </button>
        <button 
          className={selectedType === 'modern' ? 'active' : ''} 
          onClick={() => setSelectedType('modern')}
        >
          Modern Vases
        </button>
      </div>
      
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
 
