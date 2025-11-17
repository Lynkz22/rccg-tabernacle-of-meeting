import React from "react";
import Navbar from "../Components/Navbar";
import InfoCalendarLandingPage from "../Components/InfoCalendarLandingPage";
import HomeWords from "../Components/HomeWords";
import HomeBibleVerses from "../Components/HomeBibleVerses";
import Space from "../Components/Space";
import InfoCalendar from "../Components/InfoCalendar";
import Footer from "../Components/Footer";

const Calendar = () => {
  return (
    <>
      <Navbar />
      <InfoCalendarLandingPage />
      <HomeWords />
      {/* <HomeBibleVerses /> */}
      <Space />
      <InfoCalendar />
      <Footer />
    </>
  );
};

export default Calendar;
