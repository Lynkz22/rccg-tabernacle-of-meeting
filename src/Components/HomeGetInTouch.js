import React from "react";
import "../Styles/HomeGetInTouch.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeGetInTouch = () => {
  return (
    <>
      <motion.section
        className="homeGIT"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="divGIT">
          <h2 className="homeGITHeading">Need Prayer?</h2>
          <p className="homeGITtext">
            Prayer is at the core of everything we are at RCCG Tabernacle of
            Meeting. The Apostle Paul encouraged his friends to never stop
            praying. We want to pray for you in your time of need, and we invite
            you to reach out today.
          </p>

          <div className="divWelcomeButton">
            <Link to="/PrayerRequest">
              <button className="buttonHomeWelcome">
                <p className="textWelcomeButton">CONTACT</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="divGIT">
          <h2 className="homeGITHeading">WANT TO CONNECT?</h2>
          <p className="homeGITtext">
            At RCCG Tabernacle of Meeting, we believe connection is at the heart
            of who we are. Whether you have questions, need guidance, or simply
            want to reach out, we're here to listen and walk alongside you.
          </p>

          <div className="divWelcomeButton">
            <Link to="/GetInTouch">
              <button className="buttonHomeWelcome">
                <p className="textWelcomeButton">CONNECT</p>
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HomeGetInTouch;
