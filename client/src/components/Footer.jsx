import React from 'react'
import "./Home.css"

const Footer = () => {
  return (
    <>
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
    </>
  )
}

export default Footer