import React from "react";
import "../Styles/WWAMissionAndVision.css";
import { easeIn, motion } from "framer-motion";

const WWAMissionAndVision = () => {
  return (
    <>
      <motion.section
        className="sectionWWAMissionAndVision"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.2, ease: easeIn }}
        viewport={{ once: true }}
      >
        <div className="divMissionAndVisionHeading">
          <p className="missionAndVisionHeading">
            MISSION <br />&
            <br />
            VISION
          </p>
        </div>
        <div className="divMissionAndVisionText">
          <p className="missionAndVisionText">1. To make heaven.</p>
          <p className="missionAndVisionText">
            2. To take as many people with us.
          </p>
          <p className="missionAndVisionText">
            3. To have a member of RCCG in every family of all nations.
          </p>
          <p className="missionAndVisionText">
            4. To accomplish No. 1 above, holiness will be our lifestyle.
          </p>
          <p className="missionAndVisionText">
            5. To accomplish No. 2 and 3 above, we will plant churches within
            five minutes walking distance in every city and town of developing
            countries and within five minutes driving distance in every city and
            town of developed countries.
          </p>
          <p className="missionAndVisionText">
            6. We will pursue these objectives until every Nation in the world
            is reached for the Lord Jesus Christ
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default WWAMissionAndVision;
