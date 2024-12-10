import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";  // Adjust the import path as needed
import './ProductList.css';  // Ensure correct CSS import

function ProductList() {
  // Define state for products
  const [products, setProducts] = useState([]);

  // Backend API URL
  const API_URL = "http://localhost:5000";  // Adjust the URL if needed

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);  // Update state
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);  // Empty dependency array ensures this runs only once

  return (
    <section className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
}

export default ProductList;

