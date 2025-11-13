import React from "react";
import "../Styles/HomeGetInTouch.css";
import { Link } from "react-router-dom";
import { easeIn, motion } from "framer-motion";

const HomeGetInTouch = () => {
  return (
    <>
      <motion.section
        className="homeGIT"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.2, ease: easeIn }}
        viewport={{ once: true }}
      >
        <div className="divGIT">
          <h2 className="homeGITHeading">Need Prayer?</h2>
          <p className="homeGITtext">
            Prayer is at the core of everything we are at RCCG Tabernacle of
            Meeting. The Apostle Paul encouraged his friends to never stop
            praying. We want to pray for you in your time of need.
          </p>

          <div className="divWelcomeButton">
            <Link to="/About">
              <button className="buttonHomeWelcome">
                <p className="textWelcomeButton">ABOUT US</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="divGIT">
          <h2 className="homeGITHeading">Need Prayer?</h2>
          <p className="homeGITtext">
            Prayer is at the core of everything we are at RCCG Tabernacle of
            Meeting. The Apostle Paul encouraged his friends to never stop
            praying. We want to pray for you in your time of need.
          </p>

          <div className="divWelcomeButton">
            <Link to="/About">
              <button className="buttonHomeWelcome">
                <p className="textWelcomeButton">ABOUT US</p>
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HomeGetInTouch;
