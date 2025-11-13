import React from "react";
import "../Styles/HomeSomethingForYou.css";
import { motion } from "framer-motion";

const HomeSomethingForYou = () => {
  return (
    <>
      <motion.section
        className="sectionHomeSomethingForYou"
        initial={{ opacity: 0, y: "5rem" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <h2 className="youHeading">There's something here for you.</h2>
        <p className="youText">
          Explore our path to follow Jesus more closely, drawing nearer to the{" "}
          heart of God's kingdom <br /> through the guidance of the Holy Spirit.
        </p>
      </motion.section>
    </>
  );
};

export default HomeSomethingForYou;
