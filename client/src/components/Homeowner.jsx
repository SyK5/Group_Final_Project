import React, {useState} from "react";
import "./Homeowner.css";


const Icon = ({ name }) => <span className="icon">{name}</span>;


const Homeowner = () => {
  const [modalData, setModalData] = useState(null);

  // Function to open the modal
  const openModal = (data) => {
    setModalData(data); // Set modal data
  };

  // Function to close the modal
  const closeModal = () => {
    setModalData(null); 
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
    {/* Product 1 */}
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150" // Replace with actual URL
        alt="Chair"
        className="product-image"
      />
      <h3 className="product-name">Luxury Chair</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Luxury Chair",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$350",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Product 2 */}
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150"
        alt="Table"
        className="product-image"
      />
      <h3 className="product-name">Elegant Table</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Elegant Table",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$450",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Product 3 */}
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150"
        alt="Sofa"
        className="product-image"
      />
      <h3 className="product-name">Comfort Sofa</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Comfort Sofa",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$900",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Product 4 */}
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150"
        alt="Video X2"
        className="product-image"
      />
      <h3 className="product-name">Video X2</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Video X2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$200",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Product 5 */}
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150"
        alt="Table"
        className="product-image"
      />
      <h3 className="product-name">Minimal Table</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Minimal Table",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$300",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Product 6 */}
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150"
        alt="Chair"
        className="product-image"
      />
      <h3 className="product-name">Modern Chair</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Modern Chair",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$150",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Product 7 */}
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150"
        alt="Chair"
        className="product-image"
      />
      <h3 className="product-name">Classic Chair</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Classic Chair",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$250",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Product 8 */}
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150"
        alt="Ad"
        className="product-image"
      />
      <h3 className="product-name">Premium Membership Ad</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Premium Membership",
            description: "Get exclusive access to premium sales and offers.",
            price: "Exclusive",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Product 9 */}
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150"
        alt="Table"
        className="product-image"
      />
      <h3 className="product-name">Rustic Table</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Rustic Table",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$400",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Product 10 */}
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150"
        alt="Chair"
        className="product-image"
      />
      <h3 className="product-name">Ergonomic Chair</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Ergonomic Chair",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$275",
          })
        }
      >
        More Information
      </button>
    </div>

    {/* Product 11 */}
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150"
        alt="Chair"
        className="product-image"
      />
      <h3 className="product-name">Velvet Chair</h3>
      <button
        className="more-info-btn"
        onClick={() =>
          openModal({
            title: "Velvet Chair",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$325",
          })
        }
      >
        More Information
      </button>
    </div>
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