import { useState}  from 'react';
import './Category.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Category-Nav'>
      <button onClick={togglePanel} className="category-button">
        Category
      </button>
      
      <div className={`category-panel ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/vases">Vases</Link></li>
          <li><Link to="/rugs">Rugs</Link></li>
          <li><Link to="/sofasets">Sofa Sets</Link></li>
          <li><Link to="/livingroom-decor">Living Room Decor</Link></li>
          <li><Link to="/bedroom-decor">Bedroom Decor</Link></li>
          <li><Link to="/wall-art">Wall Art</Link></li>
          <li><Link to="/lighting-fixtures">Lighting Fixtures</Link></li>
          <li><Link to="/decorative-mirrors">Decorative Mirrors</Link></li>
          <li><Link to="/outdoor-decor">Outdoor Decor</Link></li>
          <li><Link to="/shop-all">Shop All</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
