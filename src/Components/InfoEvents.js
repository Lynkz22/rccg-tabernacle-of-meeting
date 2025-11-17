import React from "react";
import "../Styles/InfoEvents.css";
import HomePictureImage from "../Components/Assets/Camp/Camp1.webp";
import HomePictureImage2 from "../Components/Assets/Camp/camp4.jpg";
import HomePictureImage3 from "../Components/Assets/Camp/Camp2.jpg";
import HomePictureImage4 from "../Components/Assets/Camp/LGAF.jpg";

import { motion } from "framer-motion";

const InfoEvents = () => {
  return (
    <>
      <motion.section
        className="sectionInfoEvents"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="divEventsImage">
          <img
            src={HomePictureImage}
            alt="EventsImage"
            className="eventsImage"
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
        transition={{ duration: 2, delay: 0.2 }}
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
            src={HomePictureImage2}
            alt="EventsImage"
            className="eventsImage"
          />
        </div>
      </motion.section>

      <motion.section
        className="sectionInfoEvents"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="divEventsImage">
          <img
            src={HomePictureImage3}
            alt="EventsImage"
            className="eventsImage"
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
        transition={{ duration: 2, delay: 0 }}
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
            src={HomePictureImage4}
            alt="EventsImage"
            className="eventsImage"
          />
        </div>
      </motion.section>
    </>
  );
};

export default InfoEvents;
