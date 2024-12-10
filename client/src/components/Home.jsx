import React, { useEffect, useState } from "react";
import './Home.css';
const Home = () => {
  const categories = [
    { name: "Living Room", image: "../images/pic8.webp" },
    { name: "Dining Room", image: "../images/pic6.webp" },
    { name: "Bedroom", image: "../images/register.webp" },
    { name: "Outdoor", image: "../images/pic10.webp" },
  ];

  const products = [
    { name: "Chair", image: "../images/pic2.webp" },
    { name: "Table", image: "../images/pic4.webp" },
    { name: "Sofa", image: "../images/pic10.webp" },
  ];
  return (
    <>
      <header className="header">
       <div className="hero">
         <h1>Welcome to Elvora</h1>
         <p>Discover timeless elegance for your living space.</p>
         <a href="#categories" className="cta-button">Shop Now</a>
       </div>
</header>
      <main>
        <section id="categories" className="featured-categories">
          <h2>Featured Categories</h2>
          <div className="category-grid">
            <div className="category-card"><img src="../images/pic2.webp"alt=""height="100%" weight="100%"/></div>
            <div className="category-card"><img src="../images/floor vase-1.jpg"alt=""height="100%" weight="100%"/></div>
            <div className="category-card"><img src="../images/pic3.webp"alt=""height="100%" weight="100%"/></div>
            <div className="category-card"><img src="../images/pic4.webp"alt=""height="100%" weight="100%"/></div>
          </div>
        </section>

        <section className="best-sellers">
          <h2>Our Best-sellers</h2>
          <p>Premium only</p>
          <div className="product-grid">
            <div className="product-card"><img src="../images/Lounge furniture.png"alt=""height="100%" weight="100%"/></div>
            <div className="product-card"><img src="../images/livingroom.jpeg"alt=""height="100%" weight="100%"/></div>
            <div className="product-card"><img src="../images/livingroom1.jpeg"alt=""height="100%" weight="100%"/></div>
          </div>
        </section>

        

        <section className="guidance-section">
          <div className="guidance-container">
            <div className="guidance-text">
              <h2>Need some guidance?</h2>
              <p>Our agents are here to help you with finding the perfect products for you.</p>
            </div>
            <div className="guidance-image">
              <img src="../images/pic11.png" alt="Guidance Image" />
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
              <img src="../images/pic12.png" alt="Exclusive Items" />
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
              <img src="../images/pic13.png" alt="Premium Program" />
            </div>
          </div>
        </section>
      </main>

    </>
  );
};

export default Home;
