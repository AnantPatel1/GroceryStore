import React from "react";
import "./Working.css"; // Assuming you have a CSS file for styling

const Working = () => {
  return (
    <div className="working">
      <h1 className="parallax-text">How It Works</h1>
      <div className="content-container">
        <div className="box">
          <div className="box-index">
            <p>1</p>
          </div>
          <p>Visit freshlo.ca to browse our available Fresh Groceries.</p>
        </div>
        <div className="box">
          <div className="box-index">
            <p>2</p>
          </div>
          <p>
            Select your chosen Groceries, input your delivery address, and pay
            securely online.
          </p>
        </div>
        <div className="box">
          <div className="box-index">
            <p>3</p>
          </div>
          <p>
            The Fresh Groceries will be at your doorstep at your chosen time the
            following day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Working;
