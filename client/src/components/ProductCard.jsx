import React from 'react';

function ProductCard({ product }) {
  const { name, price, description, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
