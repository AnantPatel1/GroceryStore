import React from "react";
import classes from "./AboutUs.module.css";
import img from "../../Assets/top-distant-view-table-with-vegetables-such-as-tomatoes-cucumbers-along-with-lemons-crisps-greens-white-salad-vegetable-food.jpg";
export default function AboutUs() {
  return (
    <div className={classes.AboutUs}>
      <div class="container">
        <div class="row" style={{ textAlign: "center" }}>
          <div class="col-lg-6" style={{ marginTop: "1rem" }}>
            <img className={classes.aboutUsImg} src={img} alt="grocerry" />
          </div>
          <div class="col-lg-6" style={{ marginTop: "1rem" }}>
            <header className={classes.heading}>About</header>
            <p className={classes.description}>
              At Freshlo, we are passionate about delivering the freshest
              groceries to your doorstep. Our mission is to provide a seamless
              online shopping experience, making it easy for you to access
              high-quality products and enjoy the convenience of home delivery.
              With our commitment to freshness, quality, and customer
              satisfaction, Freshlo is your trusted partner for all your grocery
              needs.
            </p>
            <p className={classes.description}>
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
}
