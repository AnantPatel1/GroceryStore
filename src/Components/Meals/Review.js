import React from "react";
import classes from "./Review.module.css";
import { motion } from "framer-motion";
export default function Review() {
  return (
    <div class="container" style={{ marginTop: "40px" }}>
      <header style={{ textAlign: "center" }}>REVIEWS</header>
      <p style={{ textAlign: "center" }}>Hear from our new home chefs</p>
      <div class="row">
        <div
          class="col-lg-4 col-sm-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <motion.div
            className={classes.review}
            initial={{ opacity: 0, scale: 1, translateY: "100px" }}
            whileInView={{ opacity: 1, scale: 1, translateY: "0px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/free-photo/baker-standing-table-with-variety-baked-breads_23-2147883500.jpg?size=626&ext=jpg&uid=R108449048&ga=GA1.2.495900032.1686914931&semt=sph"
              alt="person"
            />
            <p>
              Kitchen Comforts brought true comfort to our table. These CIY Meal
              Kits are incredible!
            </p>
            <p style={{ top: "220px", width: "100%", textAlign: "center" }}>
              @REALLYGREATSITE
            </p>
          </motion.div>
        </div>
        <div
          class="col-lg-4 col-sm-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <motion.div
            className={classes.review}
            initial={{ opacity: 0, scale: 1, translateY: "100px" }}
            whileInView={{ opacity: 1, scale: 1, translateY: "0px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/premium-photo/portrait-beautiful-woman-chef-wearing-white-uniform-posing-kitchen-restaurant_171337-55789.jpg?size=626&ext=jpg&uid=R108449048&ga=GA1.2.495900032.1686914931&semt=ais"
              alt="person"
            />
            <p>
              I never knew I could cook dishes like these. It's truly easy - and
              my family is grateful!
            </p>
            <p style={{ top: "220px", width: "100%", textAlign: "center" }}>
              @REALLYGREATSITE
            </p>
          </motion.div>
        </div>
        <div
          class="col-lg-4 col-sm-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <motion.div
            className={classes.review}
            initial={{ opacity: 0, scale: 1, translateY: "100px" }}
            whileInView={{ opacity: 1, scale: 1, translateY: "0px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/free-photo/chef-with-his-arms-crossed-white-background_1368-2792.jpg?size=626&ext=jpg&uid=R108449048&ga=GA1.2.495900032.1686914931&semt=sph"
              alt="person"
            />
            <p>
              I admire businesses that evolve with the times, and Kitchen
              Comforts did it so deliciously!
            </p>
            <p style={{ top: "220px", width: "100%", textAlign: "center" }}>
              @REALLYGREATSITE
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
