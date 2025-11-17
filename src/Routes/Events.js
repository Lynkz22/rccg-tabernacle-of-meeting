import React from "react";
import Navbar from "../Components/Navbar";
import InfoEventsLandingPage from "../Components/InfoEventsLandingPage";
import InfoEvents from "../Components/InfoEvents";
import Footer from "../Components/Footer";
import HomeWords from "../Components/HomeWords";
import HomeBibleVerses from "../Components/HomeBibleVerses";
import Space from "../Components/Space";
import HomePicture from "../Components/HomePicture";

const Events = () => {
  return (
    <>
      <Navbar />
      <InfoEventsLandingPage />
      <HomeWords />
      {/* <HomeBibleVerses /> */}
      <Space />
      <InfoEvents />
      <Space />
      <Space />
      <Space />
      <HomePicture />
      <Footer />
    </>
  );
};

export default Events;
