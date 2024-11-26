import React, { useEffect, useState } from "react";
import './Home.css';
const Home = () => {
  return (
    <>
      <header className="header">
        <h1>ELVORA</h1>
        <p>Elegance Beyond the Ordinary</p>
        <a href="#categories" className="cta-button">Join the experience</a>
      </header>

      <main>
        <section id="categories" className="featured-categories">
          <h2>Featured Categories</h2>
          <div className="category-grid">
            <div className="category-card">Living Room</div>
            <div className="category-card">Living Room</div>
            <div className="category-card">Living Room</div>
            <div className="category-card">Living Room</div>
          </div>
        </section>

        <section className="best-sellers">
          <h2>Our Best-sellers</h2>
          <p>Premium only</p>
          <div className="product-grid">
            <div className="product-card">Chair</div>
            <div className="product-card">Chair</div>
            <div className="product-card">Chair</div>
          </div>
        </section>

        <section className="about-us">
          <div className="about-us-container">
            <div className="about-us-text">
              <h2>About us</h2>
              <p>Exclusivity Guaranteed</p>
              <p>Uncompromising Quality</p>
              <p>Carefully curated collection</p>
              <a href="#more-info" className="cta-button">More infos</a>
            </div>
            <div className="about-us-image">
              <img src="assets/about-us-image.jpg" alt="About Us Image" />
            </div>
          </div>
        </section>

        <section className="guidance-section">
          <div className="guidance-container">
            <div className="guidance-text">
              <h2>Need some guidance?</h2>
              <p>Our agents are here to help you with finding the perfect products for you.</p>
            </div>
            <div className="guidance-image">
              <img src="assets/guidance-image.jpg" alt="Guidance Image" />
            </div>
          </div>
        </section>

        <section className="exclusive-items">
          <div className="exclusive-container">
            <div className="exclusive-text">
              <h2>More Exclusive Items?</h2>
              <p>Discover rare and unique pieces that can't be found anywhere else.</p>
              <a href="#premium" className="cta-button">More Info</a>
            </div>
            <div className="exclusive-image">
              <img src="assets/exclusive-items.jpg" alt="Exclusive Items" />
            </div>
          </div>
        </section>

        <section className="premium-program">
          <div className="premium-container">
            <div className="premium-text">
              <h2>Join Our Premium Program</h2>
              <p>Become a member and enjoy benefits such as exclusive access, free shipping, and more.</p>
              <a href="#premium-benefits" className="cta-button">Join Now</a>
            </div>
            <div className="premium-image">
              <img src="assets/premium-program.jpg" alt="Premium Program" />
            </div>
          </div>
        </section>
      </main>

    </>
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

export default Home;