import React from "react";
import "../Styles/HomeWords.css";
import { easeIn, motion } from "framer-motion";

const HomeWords = () => {
  return (
    <>
      <section className="sectionHomeWords">
        <motion.p
          className="textHomeWords"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: easeIn }}
          viewport={{ once: true }}
        >
          Word <span className="line">|</span>
        </motion.p>

        <motion.p
          className="textHomeWords"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: easeIn }}
          viewport={{ once: true }}
        >
          Devotion
          <span className="line">|</span>
        </motion.p>

        <motion.p
          className="textHomeWords"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2, ease: easeIn }}
          viewport={{ once: true }}
        >
          Excellence
          <span className="line">|</span>
        </motion.p>

        <motion.p
          className="textHomeWords"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2, ease: easeIn }}
          viewport={{ once: true }}
        >
          Family <span className="line">|</span>
        </motion.p>

        <motion.p
          className="textHomeWords"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.2, ease: easeIn }}
          viewport={{ once: true }}
        >
          Community
        </motion.p>
      </section>
    </>
  );
};

export default HomeWords;
