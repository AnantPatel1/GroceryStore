import React, { useEffect } from "react";
import "./Header.css";

const Headers = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".parallax");
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.3; // Adjust the speed here
      const backgroundTransform = `translateY(${scrolled * parallaxSpeed}px)`;
      parallax.style.transform = backgroundTransform;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax">
      <div className="parallax-content">
        <div className="top-left-text">Welcome to FreshLo</div>
        <div className="center-text">
          <h1>Freshlo</h1>
          <h2>Get Fresh Groceries Delivered Right to Your Doorstep</h2>
        </div>
      </div>
    </div>
  );
};

export default Headers;
