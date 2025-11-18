import React from "react";
import Navbar from "../Components/Navbar";
import ContactPrayerRequest from "../Components/ContactPrayerRequest";
import ContactPRIntroduction from "../Components/ContactPRIntroduction";
import ContactPRLink from "../Components/ContactPRLink";
import Footer from "../Components/Footer";
import Space from "../Components/Space";

const PrayerRequest = () => {
  return (
    <>
      <Navbar />
      <ContactPrayerRequest />
      <ContactPRIntroduction />
      <ContactPRLink />
      <Space />
      <Space />
      <Footer />
    </>
  );
};

export default PrayerRequest;
