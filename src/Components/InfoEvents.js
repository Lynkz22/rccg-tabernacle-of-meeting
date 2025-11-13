import React from "react";
import "../Styles/InfoEvents.css";
import HomePictureImage from "../Components/Assets/HomeLandingPage/LandingPage2.jpg";
import { easeIn, motion } from "framer-motion";

const InfoEvents = () => {
  return (
    <>
      <motion.section
        className="sectionInfoEvents"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: easeIn }}
        viewport={{ once: true }}
      >
        <div className="divEventsImage">
          <img
            src={HomePictureImage}
            alt="HomePictureImage"
            className="homePictureImage"
          />
        </div>
        <div className="divEventsText">
          <h2 className="headingEventsText">
            Annual Convention (Global Event)
          </h2>
          <p className="eventsText">
            Held annually in August at Redemption Camp, located at Kilometer 46
            on the Lagos-Ibadan Expressway, Ogun State, Nigeria.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="sectionInfoEvents"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: easeIn }}
        viewport={{ once: true }}
      >
        <div className="divEventsText">
          <h2 className="headingEventsText">
            HOLY GHOST CONGRESS (Global Event)
          </h2>
          <p className="eventsText">
            Holds annually in December at Redemption Camp, located at Kilometer
            46 on the Lagos-Ibadan Expressway, Ogun State, Nigeria.
          </p>
        </div>
        <div className="divEventsImage">
          <img
            src={HomePictureImage}
            alt="HomePictureImage"
            className="homePictureImage"
          />
        </div>
      </motion.section>

      <motion.section
        className="sectionInfoEvents"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: easeIn }}
        viewport={{ once: true }}
      >
        <div className="divEventsImage">
          <img
            src={HomePictureImage}
            alt="HomePictureImage"
            className="homePictureImage"
          />
        </div>
        <div className="divEventsText">
          <h2 className="headingEventsText">
            HOLY GHOST SERVICE (Global Event)
          </h2>
          <p className="eventsText">
            Held every first Friday of the month at Redemption Camp, located at
            Kilometer 46 on the Lagos-Ibadan Expressway, Ogun State, Nigeria.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="sectionInfoEvents"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: easeIn }}
        viewport={{ once: true }}
      >
        <div className="divEventsText">
          <h2 className="headingEventsText">
            LETS GO A FISHING (Global Event)
          </h2>
          <p className="eventsText">
            Holds annually in April & December at Redemption Camp, located at
            Kilometer 46 on the Lagos-Ibadan Expressway, Ogun State, Nigeria.
          </p>
        </div>
        <div className="divEventsImage">
          <img
            src={HomePictureImage}
            alt="HomePictureImage"
            className="homePictureImage"
          />
        </div>
      </motion.section>
    </>
  );
};

export default InfoEvents;
