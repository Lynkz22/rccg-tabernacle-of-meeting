import React from "react";
import Navbar from "../Components/Navbar";
import ContactGITLandingPage from "../Components/ContactGITLandingPage";
import Space from "../Components/Space";
import Footer from "../Components/Footer";
import ContactGITPicture from "../Components/ContactGITPicture";
import ContactMain from "../Components/ContactMain";

const GetInTouch = () => {
  return (
    <>
      <Navbar />
      <ContactGITLandingPage />
      <Space />
      <Space />
      <ContactMain />
      <ContactGITPicture />
      <Footer />
    </>
  );
};

export default GetInTouch;
