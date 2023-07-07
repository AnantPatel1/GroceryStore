import React from "react";
import classes from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Footer() {
  return (
    <div className={classes.footer}>
      <div class="conatiner">
        <div class="row">
          <div
            class="col-sm-6"
            style={{
              textAllign: "center",
              color: "white",
              fontFamily: "cursive",
              padding: "22px",
            }}
          >
            <p>FRESHLO</p>
            FRESHLO is an online grocery store that delivers fresh, hygienic,
            and quality fruits, vegetables, groceries, and more to customers in
            Navi Mumbai. The store offers a wide range of products, including
            both branded and homemade items. FRESHLO also has a number of
            special offers and discounts available, making it a great way to
            save money on your grocery shopping.
          </div>
          <div class="col-sm-6" style={{ padding: "10px" }}>
            <p style={{ color: "white", fontSize: "large", padding: "10px" }}>
              Contact Info
            </p>
            <li>
              <a href="#">
                <CallIcon className={classes.icon} />
                +91 XXX-XXXX-XXX
              </a>
            </li>
            <li>
              <a href="#">
                <EmailIcon className={classes.icon} />
                xxx@gmail.com
              </a>
            </li>
            <li>
              <a href="#">
                <LocationOnIcon className={classes.icon} />
                Location
              </a>
            </li>

            <div className={classes.SocialMedia}>
              <a href="">
                <InstagramIcon
                  className={classes.socialIcon}
                  fontSize={"large"}
                />
              </a>
              <a href="">
                <TwitterIcon
                  className={classes.socialIcon}
                  fontSize={"large"}
                />
              </a>
              <a href="">
                <LinkedInIcon
                  className={classes.socialIcon}
                  fontSize={"large"}
                />
              </a>
              <a href="">
                <FacebookIcon
                  className={classes.socialIcon}
                  fontSize={"large"}
                />
              </a>
              <a href="#">
                <EmailIcon className={classes.socialIcon} fontSize={"large"} />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.horizontalruler}>
          <hr className={classes.ruler}></hr>
        </div>
        <div className={classes.copyright}>
          <p>
            <CopyrightIcon />
            FRESHLO All right reserved 2023
          </p>
        </div>
      </div>
    </div>
  );
}
