import classes from "./Boxes.module.css";

import React from "react";

export default function Boxes() {
  return (
    <div className={classes.container}>
      <div className={`${classes.box1} ${classes.backimg}`}></div>
      <div className={classes.box2}>
        <header>What's inside each box?</header>
        <ul>
          <li>What's inside each box?</li>
          <li>Ready to cook ingredients</li>
          <li>QR codes for real-time videos</li>
          <li>Guaranteed delicious meals!</li>
        </ul>
        <button>BROWSE OUR KITS</button>
      </div>
    </div>
  );
}
