import React from "react";
import classes from "./AboutUs.module.css";
import img from "../../Assets/top-distant-view-table-with-vegetables-such-as-tomatoes-cucumbers-along-with-lemons-crisps-greens-white-salad-vegetable-food.jpg";
export default function AboutUs() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <img className={classes.aboutUsImg} src={img} alt="grocerry" />
        </div>
        <div class="col-lg-6"></div>
      </div>
    </div>
  );
}
