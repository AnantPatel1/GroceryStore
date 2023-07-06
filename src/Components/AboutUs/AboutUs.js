import React from "react";
import classes from "./AboutUs.module.css";
import image from "../../Assets/top-view-assortment-vegetables-paper-bag.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className={classes.AboutUs}>
      <div className="container">
        <div className="row">
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, scale: 1, translateX: "-200px" }}
            whileInView={{ opacity: 1, scale: 1, translateX: "0px" }}
            transition={{ duration: 0.5 }}
          >
            <img className={classes.image} src={image} alt="Img" />
          </motion.div>
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, scale: 1, translateX: "200px" }}
            whileInView={{ opacity: 1, scale: 1, translateX: "0px" }}
            transition={{ duration: 0.5 }}
          >
            <h2>About Us</h2>
            <p>
              At Freshlo, we are passionate about delivering the freshest
              groceries to your doorstep. Our mission is to provide a seamless
              online shopping experience, making it easy for you to access
              high-quality products and enjoy the convenience of home delivery.
              With our commitment to freshness, quality, and customer
              satisfaction, Freshlo is your trusted partner for all your grocery
              needs.
            </p>
            <p>
              At Freshlo, we are passionate about delivering the freshest
              groceries to your doorstep. Our mission is to provide a seamless
              online shopping experience, making it easy for you to access
              high-quality products and enjoy the convenience of home delivery.
              With our commitment to freshness, quality, and customer
              satisfaction, Freshlo is your trusted partner for all your grocery
              needs.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
