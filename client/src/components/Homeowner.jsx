import React, {useState} from "react";
import "./Homeowner.css";

// Sample icons for demonstration (replace with actual icons if you have them)
const Icon = ({ name }) => <span className="icon">{name}</span>;


const Homeowner = () => {
  const [modalData, setModalData] = useState(null);

  // Function to open the modal
  const openModal = (data) => {
    setModalData(data); // Set modal data
  };

  // Function to close the modal
  const closeModal = () => {
    setModalData(null); // Clear modal data to close the modal
  };
  return (
    <div>
      {/* Header Component */}
      <header className="header">
        {/* Top Section */}
        <div className="top-section">
          <div className="logo">Evora</div>
          <div className="icons">
            <Icon name="Login" />
            <Icon name="Wishlist" />
            <Icon name="Dropdown" />
          </div>
        </div>

        {/* Main Header Section */}
        <div className="main-header">
          <div className="text-overlay">
            <h1>Elegance Beyond the Ordinary</h1>
            <button className="explore-btn">Explore Collection</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Main Section with Animated Images */}
        <section className="main-section">
          <div className="image-box">
            <img
              src="https://example.com/image1.jpg" // Replace with actual URL
              alt="Luxury Item 1"
              className="animated-image image-left"
            />
            <img
              src="https://example.com/image2.jpg" // Replace with actual URL
              alt="Luxury Item 2"
              className="animated-image image-right"
            />
          </div>
        </section>
        {/* Experience Text Section */}
        <section className="experience-section">
          <div className="experience-text">
            <h2>The Ultimate Luxury Shopping Experience</h2>
            <p>
              At Evora, we believe in offering more than just products; we
              provide an experience that brings sophistication, elegance, and
              exclusive selections to homeowners who seek the extraordinary. Our
              curated collections are designed to elevate your living spaces
              with a sense of timeless style and refined luxury.
            </p>
          </div>
        </section>
         {/* Premium Section */}
        <section className="premium-section">
          <h2 className="premium-title">For Premium Members Only</h2>
          <div className="premium-links">
            {/* Image 1 */}
            <div className="premium-item">
              <img
                src="https://example.com/image3.jpg" // Replace with actual URL
                alt="Premium Item 1"
                className="premium-image"
              />
              <div className="overlay-text">For Premium Members Only</div>
              <a href="/premium-item-1" className="more-info">
                More info -
              </a>
            </div>

            {/* Image 2 */}
            <div className="premium-item">
              <img
                src="https://example.com/image4.jpg" // Replace with actual URL
                alt="Premium Item 2"
                className="premium-image"
              />
              <div className="overlay-text">For Premium Members Only</div>
              <a href="/premium-item-2" className="more-info">
                More info -
              </a>
            </div>

            {/* Image 3 */}
            <div className="premium-item">
              <img
                src="https://example.com/image5.jpg" // Replace with actual URL
                alt="Premium Item 3"
                className="premium-image"
              />
              <div className="overlay-text">For Premium Members Only</div>
              <a href="/premium-item-3" className="more-info">
                More info -
              </a>
            </div>
          </div>
        </section>
            {/* Quick Filters Section */}
            <section className="quick-filters-section">
          <h2 className="quick-filters-title">Quick Filters</h2>
          <div className="quick-filters">
            {/* Image 1 */}
            <div className="filter-item">
              <img
                src="https://example.com/filter1.jpg" // Replace with actual URL
                alt="Filter 1"
                className="filter-image"
              />
            </div>

            {/* Image 2 */}
            <div className="filter-item">
              <img
                src="https://example.com/filter2.jpg" // Replace with actual URL
                alt="Filter 2"
                className="filter-image"
              />
            </div>

            {/* Image 3 */}
            <div className="filter-item">
              <img
                src="https://example.com/filter3.jpg" // Replace with actual URL
                alt="Filter 3"
                className="filter-image"
              />
            </div>

            {/* Image 4 */}
            <div className="filter-item">
              <img
                src="https://example.com/filter4.jpg" // Replace with actual URL
                alt="Filter 4"
                className="filter-image"
              />
            </div>

            {/* Image 5 */}
            <div className="filter-item">
              <img
                src="https://example.com/filter5.jpg" // Replace with actual URL
                alt="Filter 5"
                className="filter-image"
              />
            </div>
          </div>
        </section>
        <section className="product-section">
  <h2 className="product-title">Explore Our Exclusive Collection</h2>
  <div className="product-grid">
    {/* Individual Product 1 */}
    <div className="product-item">
      <img
        src="https://example.com/image1.jpg" // Replace with actual URL
        alt="Chair"
        className="product-image"
      />
      <h3 className="product-name">Luxury Chair</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Luxury Chair",
            description: "A high-quality luxury chair made of premium materials.",
            price: "$350",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Individual Product 2 */}
    <div className="product-item">
      <img
        src="https://example.com/image2.jpg" // Replace with actual URL
        alt="Table"
        className="product-image"
      />
      <h3 className="product-name">Elegant Table</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Elegant Table",
            description: "An elegant wooden table perfect for modern interiors.",
            price: "$450",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Individual Product 3 */}
    <div className="product-item">
      <img
        src="https://example.com/image3.jpg" // Replace with actual URL
        alt="Sofa"
        className="product-image"
      />
      <h3 className="product-name">Comfort Sofa</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Comfort Sofa",
            description:
              "A comfortable and stylish sofa to add charm to your living room.",
            price: "$900",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Add more products here */}
  </div>

  {/* Modal for More Information */}
  {modalData && (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent modal closure when clicking inside
      >
        <button className="close-modal" onClick={closeModal}>
          &times;
        </button>
        <h3>{modalData.title}</h3>
        <p>{modalData.description}</p>
        <p className="modal-price">{modalData.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  )}
</section>
      </main>
    </div>
  );
};

export default Homeowner;