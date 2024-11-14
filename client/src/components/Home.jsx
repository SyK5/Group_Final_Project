// Homepage.jsx
import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <h1>Elegance Beyond the Ordinary</h1>
        <button className="explore-btn">Explore Collection</button>
      </header>

      {/* Featured Categories Section */}
      <section className="featured-categories">
        <h2>Featured Categories</h2>
        <div className="category-grid">
          <div className="category-item">Category 1</div>
          <div className="category-item">Category 2</div>
          <div className="category-item">Category 3</div>
          <div className="category-item">Category 4</div>
        </div>
      </section>

      {/* Our Best Sellers Section */}
      <section className="best-sellers">
        <h2>Our Best Sellers</h2>
        <div className="best-seller-grid">
          <div className="best-seller-item">Best Seller 1</div>
          <div className="best-seller-item">Best Seller 2</div>
          <div className="best-seller-item">Best Seller 3</div>
          <div className="best-seller-item">Best Seller 4</div>
        </div>
      </section>

      {/* Exclusive Items Section */}
      <section className="exclusive-items">
        <h2>More than 100,000 clients trust us</h2>
        <button className="see-more-btn">See more</button>
      </section>

      {/* Premium Program Section */}
      <section className="premium-program">
        <h2>Join our premium program</h2>
        <button className="join-btn">Join now</button>
      </section>

      {/* Assistance Section */}
      <footer className="assistance">
        <h2>Do you need some assistance?</h2>
        <p>Our team is here to help you.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

