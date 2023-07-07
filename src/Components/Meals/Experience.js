import React from "react";
import classes from "./Experience.module.css";
export default function Experience() {
  return (
    <>
      <div className={classes.heading}>
        <header>FRESHLO</header>
        <p>
          Take home the Kitchen Comforts experience. Try our Meal Kits and
          unleash your inner chef!
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className={classes.options}>
              <img
                src="https://img.freepik.com/free-photo/fresh-healthy-fruits-straw-basket-generative-ai_188544-11999.jpg?size=626&ext=jpg&ga=GA1.2.495900032.1686914931&semt=sph"
                alt="grocery"
              />
              <p>Hearty, wholesome meals for the whole family</p>
              <button>TRY OUR FAMILY FEAST KITS</button>
            </div>
          </div>
          <div
            class="col-lg-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className={classes.options}>
              <img
                src="https://img.freepik.com/free-photo/side-view-greek-saladlettuce-tomatoes-feta-cheese-cucumbers-black-olives-purple-onion-dark-wooden-table_176474-3109.jpg?size=626&ext=jpg"
                alt="grocery"
              />
              <p>Vegan favorites with a delicious twist</p>
              <button>VIEW OUR VEGAN OPTIONS</button>
            </div>
          </div>
          <div
            class="col-lg-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className={classes.options}>
              <img
                src="https://img.freepik.com/premium-photo/fresh-ripe-red-yellow-cherry_82893-18235.jpg?size=626&ext=jpg"
                alt="grocery"
              />
              <p>Asian delights to take you on a culinary trip</p>
              <button>EAT YOUR WAY TO ASIA</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
