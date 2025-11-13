import React from "react";
import Navbar from "../Components/Navbar";
import HomeLandingPage from "../Components/HomeLandingPage";
import HomeUnderTheMinistry from "../Components/HomeUnderTheMinistry";
import HomeWorshipWithUs from "../Components/HomeWorshipWithUs";
import HomePicture from "../Components/HomePicture";
import HomeSomethingForYou from "../Components/HomeSomethingForYou";
import HomeWords from "../Components/HomeWords";
import HomeBibleVerses from "../Components/HomeBibleVerses";
import HomeGetInTouch from "../Components/HomeGetInTouch";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeLandingPage />
      <HomeUnderTheMinistry />
      <HomePicture />
      <HomeSomethingForYou />
      <HomeWorshipWithUs />
      <HomeWords />
      <HomeBibleVerses />
      <HomePicture />
      <HomeGetInTouch />
      <Footer />
    </>
  );
};

export default Home;
