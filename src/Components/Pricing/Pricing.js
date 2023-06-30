import React from "react";
import "./Pricing.css"; // Assuming you have a CSS file for styling

const Pricing = () => {
  return (
    <div className="page-container">
      <div className="container1 container">
        <div className="price-label">Price: $10</div>
        <div className="image-container">
          {/* Background image for the first div */}
        </div>
        <button className="button">Buy Now</button>
      </div>

      <div className="container2 container">
        <div className="price-label">Price: $20</div>
        <div className="image-container">
          {/* Background image for the second div */}
        </div>
        <button className="button">Buy Now</button>
      </div>

      <div className="container3 container">
        <div className="price-label">Price: $30</div>
        <div className="image-container">
          {/* Background image for the third div */}
        </div>
        <button className="button">Buy Now</button>
      </div>
    </div>
  );
};

export default Pricing;
