import React from "react";
import "../Styles/HomeWorshipWithUs.css";
import HomeWorshipWithUsImage from "../Components/Assets/HomeWorship/Worship.jpg";
import { motion } from "framer-motion";

const HomeWorshipWithUs = () => {
  return (
    <>
      <section className="sectionHomeWorshipWithUs">
        <div className="divWorshipWithUsImage">
          <img
            alt="HeroImg"
            src={HomeWorshipWithUsImage}
            className="WorshipWithUsImage"
          />
        </div>
        <div className="divWorshipWitUsTextMain">
          <div
            className="divWorshipWithUsText"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="WorshipWithUsText"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.2 }}
              viewport={{ once: true }}
            >
              WORSHIP WITH US
            </motion.p>
            <motion.p
              className="WorshipWithUsAddress"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: -0.5 }}
              viewport={{ once: true }}
            >
              RCCG Tabernacle of Meeting, Church Address, United Kingdom
            </motion.p>
          </div>
          <div className="worshipDate">
            <motion.p
              className="worshipDateText"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.2 }}
              viewport={{ once: true }}
            >
              As A Church, We Meet Together on Sundays At 9AM
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeWorshipWithUs;
