import React from "react";
import classes from "./AboutUs.module.css";
import image from "../../Assets/top-view-assortment-vegetables-paper-bag.jpg";
import Aos from "aos";
// import "aos/dist/aos.css";

const AboutUs = () => {
  Aos.init();

  return (
    <div className={classes.AboutUs}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img className={classes.image} src={image} alt="Img" />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
