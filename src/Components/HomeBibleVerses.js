import React from "react";
import "../Styles/HomeBibleVerses.css";
import { motion } from "framer-motion";

const HomeBibleVerses = () => {
  return (
    <>
      <motion.section
        className="sectionHomeBibleVerse"
        initial={{ opacity: 0, y: "5rem" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="divHomeBibleVerses">
          <h2 className="homeBibleVersesHeading">Holiness as a Lifestyle</h2>
          <p className="homeBibleVersesText">
            RCCG teaches that holiness—moral purity and obedience to God—is
            essential for every believer, as 1 Peter 1:15-16 commands: “Be holy,
            because I am holy.” Without holiness, no one will see the Lord
            (Hebrews 12:14), so it must be a daily lifestyle, not just a
            doctrine. Members are trained to avoid sin, worldly vices, and
            rebellion through prayer, fasting, and Holy Spirit empowerment. The
            church declares, “Holiness will be our lifestyle,” in its
            constitution and programs like Holy Ghost Services. This pursuit of
            sanctification prepares souls for heaven and reflects God's
            character in everyday conduct.
          </p>
        </div>
        <div className="divHomeBibleVerses1">
          <div className="HomeBibleVerses1">
            <h2 className="homeBibleVersesHeading1">
              Evangelism and Soul-Winning
            </h2>
            <p className="homeBibleVersesText1">
              RCCG's mission is to make heaven and take as many people as
              possible, driven by Matthew 28:19-20: “Go and make disciples of
              all nations.” Empowered by the Holy Spirit (Acts 1:8), they plant
              churches in 197+ countries with a “5-minute walk” parish model.
              Monthly Holy Ghost Services, annual Congress, and digital outreach
              are platforms for miracles and altar calls. Every member is a
              soul-winner, trained to evangelize in homes, workplaces, and
              online. This global vision turns inward holiness into outward
              action for eternal impact.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HomeBibleVerses;
