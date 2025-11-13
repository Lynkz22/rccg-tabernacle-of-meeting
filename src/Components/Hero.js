import React from "react";
import "../Styles/main.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiArrowRight } from "react-icons/ti";

const Hero = (props) => {
  return (
    <>
      <div className="divHero">
        <div className="landingPageText">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 5 }}
          >
            <h1 className="openingPhrase">
              Delivering Real
              <br />
              Value Beyond <br />
              Expectations.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 5 }}
          >
            <p className="openingPhraseItems">
              Mechanical Engineering | Electrical Engineering
            </p>
            <p></p>
          </motion.div>
          <div>
            <Link to="/Projects">
              <motion.button
                className="GITButton"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 0.2, duration: 4 }}
              >
                <p className="textGITButton">
                  Get In Touch <TiArrowRight className="linkArrow" />
                </p>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
