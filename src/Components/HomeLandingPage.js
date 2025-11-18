import React from "react";
import "../Styles/HomeLandingPage.css";
import HomeWelcomeImage from "../Components/Assets/HomeLandingPage/Tabernacle.webp";

const HomeLandingPage = () => {
  return (
    <>
      <section className="divHomeWelcomeImage">
        <img
          alt="HeroImg"
          src={HomeWelcomeImage}
          className="homeWelcomeImage"
        />

        <div className="divHomeLandingPageText">
          <p className="homeLandingPageText">RCCG TABERNACLE OF MEETING</p>
          <p className="homeLandingPageText1">WHERE THE GLORY OF GOD DWELLS</p>
          <p className="homeLandingPageText2">Welcome Home</p>
        </div>
      </section>
    </>
  );
};

export default HomeLandingPage;
