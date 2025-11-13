import React from "react";
import "../Styles/HomeUnderTheMinistry.css";
import DaddyAdeboye from "../Components/Assets/DaddyAdeboye/DaddyAdeboye.jpg";
import { motion } from "framer-motion";

const HomeUnderTheMinistry = () => {
  return (
    <section className="sectionHomeUnderTheMinistry">
      <motion.div
        className="divdaddyGOImage"
        initial={{ opacity: 0, x: "-2rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <img
          src={DaddyAdeboye}
          alt="Pastor E.A. Adeboye"
          className="daddyGOImage"
        />
      </motion.div>

      <motion.div
        className="divHomeUnderTheMinistry"
        initial={{ opacity: 0, x: "2rem" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="divHeading">
          <h1 className="heading">
            UNDER THE LEADERSHIP OF PASTOR E.A. ADEBOYE
          </h1>
        </div>
        <div className="divHomeUnderTheMinistryContent">
          <p className="underTheMinistryContent">
            Welcome to RCCG Tabernacle of Meeting, a vibrant parish of the
            Redeemed Christian Church of God (RCCG). Guided by the visionary
            leadership and anointed ministry of our General Overseer, Pastor
            E.A. Adeboye, we are committed to pursuing holiness, spreading the
            Gospel, and transforming lives through the power of Jesus Christ.
            <br />
            <br />
            Here, faith is lived out daily—through heartfelt worship,
            compassionate outreach, and a family united in purpose. Join us as
            we follow God's call under Daddy G.O.'s enduring mantle of grace and
            wisdom.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeUnderTheMinistry;
