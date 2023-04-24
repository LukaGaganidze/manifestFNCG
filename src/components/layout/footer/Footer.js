import React from "react";
import classes from "./Footer.module.css";

import ContainerBig from "../../UI/container-big/ContainerBig";

const Footer = () => {
  return (
    <div className={classes["footer-background-clr"]}>
      <ContainerBig>
        <footer className={classes.footer}>
          <div className={classes["footer-first-part"]}>
            <div className={classes["footer-first-about"]}>
              <div>
                <h4>About</h4>
                <ul>
                  <li>Pieces</li>
                  <li>Designs</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <h4>Contact</h4>
                <ul>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/lukagaganidze/"
                  >
                    Linkedin
                  </a>
                  <a target="_blank" href="https://twitter.com/LukaGaganidze">
                    Twitter
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/luka_gaganidze/"
                  >
                    Instagram
                  </a>
                </ul>
              </div>
            </div>

            <div className={classes["footer-my-mal"]}>
              <p>Here is my email adress:</p>
              <p>lukagaganidzedev@gmail.com</p>
            </div>
          </div>

          <div className={classes["footer-second-part"]}>
            <div className={classes["valute-controller"]}>USD</div>
            <div className={classes["footer-second-text"]}>
              <div className={classes["footer-second-iiner-text"]}>
                <div>terms {"&"} conditions</div>
                <div>Privacy Policy</div>
                <div>
                  Developed By <a href="#">Luka Gaganidze</a>
                </div>
              </div>
              <div className={classes["footer-last-text"]}>
                manifest FNCG 2023
              </div>
            </div>
          </div>
        </footer>
      </ContainerBig>
    </div>
  );
};

export default Footer;
