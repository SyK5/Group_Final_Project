import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard"; // Adjust the import path as needed
import "./ProductList.css"; // Ensure correct CSS import

function ProductList() {
  // State for products, pagination, and favorites
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products to display per page

  // Backend API URL
  const API_URL = "http://localhost:5000"; // Adjust the URL if needed

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Update state
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle Page Change
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Handle Add to Favorites
  const handleToggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      // Check if the product is already in the favorites list
      const isAlreadyFavorited = prevFavorites.some((item) => item._id === product._id);
      if (isAlreadyFavorited) {
        // Remove from favorites
        return prevFavorites.filter((item) => item._id !== product._id);
      } else {
        // Add to favorites
        return [...prevFavorites, product];
      }
    });
  };

  return (
    <section className="product-list">
      <h2>Products</h2>

      <div className="products-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onToggleFavorite={handleToggleFavorite} // Pass the handler
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          className="pagination-btn"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="pagination-btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Favorites Section */}
      <div className="favorites-section">
        <h3>Liked Items</h3>
        <ul>
          {favorites.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductList;
