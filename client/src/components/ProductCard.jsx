import React, { useState } from "react";
import './ProductCard.css';
import { FaHeart } from "react-icons/fa";

function ProductCard({ product, onToggleFavorite }) {
  const [isFavorited, setIsFavorited] = useState(false);

  // Handle heart click
  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited); // Toggle the state
    onToggleFavorite(product);   // Notify the parent component
  };

  return (
    <div className="product-card">
      <img
        src={product.image_name?.[0] || "/images/default.jpg"}
        alt={product.name}
        className="product-image"
        onError={(e) => {
          e.target.src = "/images/default.jpg"; // Fallback image on error
        }}
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toLocaleString()}</p>
      <div className="product-actions">
        <button className="add-to-cart-btn">Add to Cart</button>
        <FaHeart
          className={`favorite-icon ${isFavorited ? "favorited" : ""}`}
          onClick={handleFavoriteClick}
        />
      </div>
    </div>
  );
}

export default ProductCard;
