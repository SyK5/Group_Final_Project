import React, { useState } from "react"; 
import "./Homeowner.css";

const Premember = () => {
  const [modalData, setModalData] = useState(null);

  
  const openModal = (data) => {
    setModalData(data); 
  };


  const closeModal = () => {
    setModalData(null); 
  };
  return (
    <div>
      
      <header className="header">

        
        <div className="main-header">
          <div className="text-overlay">
            <h1>Elegance Beyond the Ordinary</h1>
            <button className="explore-btn">Explore Collection</button>
          </div>
        </div>
      </header>

    
      <main>

        
        <section className="experience-section">
          <div className="experience-text">
            <h2>The Ultimate Luxury Shopping Experience</h2>
            <p>
              At Elvora, we believe in offering more than just products; we
              provide an experience that brings sophistication, elegance, and
              exclusive selections to homeowners who seek the extraordinary. Our
              curated collections are designed to elevate your living spaces
              with a sense of timeless style and refined luxury.
            </p>
          </div>
        </section>
         
        <section className="premium-section">
          <h2 className="premium-title">For Premium Members Only</h2>
          <div className="premium-links">
            
            <div className="premium-item">
              <img
                src="client/images/Lounge furniture.png" 
                alt="Lounge furniture"
                className="premium-image"
              />
              <div className="overlay-text">For Premium Members Only</div>
              <a href="/premium-item-1" className="more-info">
                More info -
              </a>
            </div>

            
            <div className="premium-item">
              <img
                src="client/images/dinnertable.webp" 
                alt="Dinner table"
                className="premium-image"
              />
              <div className="overlay-text">For Premium Members Only</div>
              <a href="/premium-item-2" className="more-info">
                More info -
              </a>
            </div>

            
            <div className="premium-item">
              <img
                src="client/images/livingroom 3.jpeg" 
                alt="living room furniture"
                className="premium-image"
              />
              <div className="overlay-text">For Premium Members Only</div>
              <a href="/premium-item-3" className="more-info">
                More info -
              </a>
            </div>
          </div>
        </section>
            
            <section className="quick-filters-section">
          <h2 className="quick-filters-title">Quick Filters</h2>
          <div className="quick-filters">
            
            <div className="filter-item">
              <img
                src="https://example.com/filter1.jpg" 
                alt="Filter 1"
                className="filter-image"
              />
            </div>

            
            <div className="filter-item">
              <img
                src="https://example.com/filter2.jpg" 
                alt="Filter 2"
                className="filter-image"
              />
            </div>

            
            <div className="filter-item">
              <img
                src="https://example.com/filter3.jpg" 
                alt="Filter 3"
                className="filter-image"
              />
            </div>

            
            <div className="filter-item">
              <img
                src="https://example.com/filter4.jpg" 
                alt="Filter 4"
                className="filter-image"
              />
            </div>

            
            <div className="filter-item">
              <img
                src="https://example.com/filter5.jpg" 
                alt="Filter 5"
                className="filter-image"
              />
            </div>
          </div>
        </section>
        <section className="product-section">
  <h2 className="product-title">Explore Our Exclusive Collection</h2>
  <div className="product-grid">
  
    <div className="product-item">
      <img
        src="https://via.placeholder.com/150" 
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

  
  {modalData && (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} 
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

export default Premember;