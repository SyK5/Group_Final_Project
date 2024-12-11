import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import videoSrc from "../assets/VideoDesign.mp4";


const Home = () => {
  return (
    <>
      <header className="header">
        <div className="video-grid">
          {/* Three video backgrounds */}
          <video autoPlay muted loop playsInline className="video-item">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay muted loop playsInline className="video-item">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay muted loop playsInline className="video-item">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Overlay content */}
        <div className="hero">
          <h1>Welcome to Elvora</h1>
          <p>Discover timeless elegance for your living space.</p>
          <a href="#categories" className="cta-button">
            Shop Now
          </a>
        </div>
      </header>

      <main>
        {/* Categories Section */}
        <section id="categories" className="featured-categories">
          <h2>Featured Categories</h2>
          <div className="category-grid">
            <Link to="/products/livingroom" className="category-card">
              <img src="../images/LivingRoom.webp" alt="Living Room" />
              <p className="category-title">Living Room</p>
            </Link>
            <Link to="/products/vases" className="category-card">
              <img src="../images/vase.webp" alt="Vases" />
              <p className="category-title">Vases</p>
            </Link>
            <Link to="/products/tables" className="category-card">
              <img src="../images/Table.webp" alt="Tables" />
              <p className="category-title">Tables</p>
            </Link>
            <Link to="/products/lamps" className="category-card">
              <img src="../images/Lamp.webp" alt="Lamps" />
              <p className="category-title">Lamps</p>
            </Link>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="best-sellers">
          <h2>Our Best-sellers</h2>
          <p>Premium only</p>
          <div className="product-grid">
            <div className="product-card">
              <img src="../images/Mirror.webp" alt="Lounge Furniture" />
            </div>
            <div className="product-card">
              <img src="../images/rugs.webp" alt="Living Room" />
            </div>
            <div className="product-card">
              <img src="../images/Lamp2.webp" alt="Living Room" />
            </div>
            <div className="product-card">
              <img src="../images/Vase2.webp" alt="Living Room" />
            </div>
            <div className="product-card">
              <img src="../images/fancyCouch.webp" alt="Living Room" />
            </div>
          </div>
        </section>

        {/* Guidance Section */}
        <section className="guidance-section">
          <div className="guidance-container">
            <div className="guidance-text">
              <h2>Need some guidance?</h2>
              <p>
                Our agents are here to help you with finding the perfect
                products for you.
              </p>
            </div>
            <div className="guidance-image">
              <div className="guidance-text">
              <img src="../images/pic11.png" alt="Guidance" />
              <a href="#premium" className="cta-button">
                More Info
              </a>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Items Section */}
        <section className="exclusive-items">
          <div className="exclusive-container">
            <div className="exclusive-text">
              <h2>More Exclusive Items?</h2>
              <p>
                Discover rare and unique pieces that can't be found anywhere
                else.
              </p>
              <a href="#premium" className="cta-button">
                More Info
              </a>
            </div>
            <div className="exclusive-image">
              <img src="../images/pic12.png" alt="Exclusive Items" />
            </div>
          </div>
        </section>

        {/* Premium Program Section */}
        <section className="premium-program">
          <div className="premium-container">
            <div className="premium-text">
              <h2>Join Our Premium Program</h2>
              <p>
                Become a member and enjoy benefits such as exclusive access,
                free shipping, and more.
              </p>
              <a href="#premium-benefits" className="cta-button">
                Join Now
              </a>
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
