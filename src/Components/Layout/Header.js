import React from "react";
import Navbar from "./Navbar";
import classes from "./Header.module.css";
export default function Header() {
  return (
    <header className={classes.headers}>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <h1 className={classes.title}>Freshlo</h1>
          <p className={classes.subtitle}>
            Get Fresh Grocery Delivered Right at Your Doorstep!
          </p>
        </div>
      </div>
    </header>
  );
}
