import React from "react";
import Navbar from "../Components/Navbar";
import WWALandingPage from "../Components/WWALandingPage";
import WWALogos from "../Components/WWALogos";
import WWAAbout from "../Components/WWAAbout";
import HomeUnderTheMinistry from "../Components/HomeUnderTheMinistry";
import WWAMissionAndVision from "../Components/WWAMissionAndVision";
import Footer from "../Components/Footer";
import HomeWords from "../Components/HomeWords";
import HomeBibleVerses from "../Components/HomeBibleVerses";
import WWAPicture from "../Components/WWAPicture";

const WhoWeAre = () => {
  return (
    <>
      <Navbar />
      <WWALandingPage />
      <WWALogos />
      <WWAAbout />
      <HomeUnderTheMinistry />
      <WWAMissionAndVision />
      <HomeWords />
      <HomeBibleVerses />
      <WWAPicture />
      <Footer />
    </>
  );
};

export default WhoWeAre;
