import React from "react";
import "./ProductPage.css"; // Import CSS for styling

const products = [
  { id: 1, name: "Elegant Coffee Table", price: "€299", image: "product1.jpg" },
  { id: 2, name: "Modern Dining Table", price: "€499", image: "product2.jpg" },
  { id: 3, name: "Minimal Side Table", price: "€199", image: "product3.jpg" },
  { id: 4, name: "Wooden Office Desk", price: "€699", image: "product4.jpg" },
  { id: 5, name: "Round Glass Table", price: "€399", image: "product5.jpg" },
  { id: 6, name: "Compact Console Table", price: "€249", image: "product6.jpg" },
  { id: 7, name: "Outdoor Patio Table", price: "€349", image: "product7.jpg" },
  { id: 8, name: "Vintage Wooden Table", price: "€599", image: "product8.jpg" },
  { id: 9, name: "Adjustable Work Desk", price: "€499", image: "product9.jpg" },
  { id: 10, name: "Scandinavian Side Table", price: "€179", image: "product10.jpg" },
  { id: 11, name: "Industrial Metal Table", price: "€399", image: "product11.jpg" },
  { id: 12, name: "Classic Coffee Table", price: "€269", image: "product12.jpg" },
  { id: 13, name: "Mid-Century Dining Table", price: "€749", image: "product13.jpg" },
  { id: 14, name: "Luxury Marble Table", price: "€899", image: "product14.jpg" },
  { id: 15, name: "Compact Folding Table", price: "€159", image: "product15.jpg" },
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1 className="page-title">Our Tables Collection</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
