import React from "react";
import "./Pricing.css";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="page-container">
      <div className="container1 container">
        <motion.div
          className="image-container image1"
          initial={{ opacity: 0, scale: 1, translateX: "-200px" }}
          whileInView={{ opacity: 1, scale: 1, translateX: "0px" }}
          transition={{ duration: 0.5 }}
        >
          <a className="price-label">Price: $10</a>
          <button className="button">Buy Now</button>
        </motion.div>
      </div>

      <div className="container2 container ">
        <motion.div
          className="image-container image2"
          initial={{ opacity: 0, scale: 1, translateX: "-200px" }}
          whileInView={{ opacity: 1, scale: 1, translateX: "0px" }}
          transition={{ duration: 0.5 }}
        >
          <a className="price-label">Price: $20</a>

          <button className="button">Buy Now</button>
        </motion.div>
      </div>

      <div className="container3 container ">
        <motion.div
          className="image-container image3"
          initial={{ opacity: 0, scale: 1, translateX: "-200px" }}
          whileInView={{ opacity: 1, scale: 1, translateX: "0px" }}
          transition={{ duration: 0.5 }}
        >
          <a className="price-label">Price: $30</a>

          <button className="button">Buy Now</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
