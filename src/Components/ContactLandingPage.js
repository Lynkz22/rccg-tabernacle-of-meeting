import React from "react";
import "../Styles/ContactLandingPage.css";
import infoCalendarLandingPageImage from "../Components/Assets/HomeLandingPage/LandingPage1.webp";

const ContactLandingPage = () => {
  return (
    <>
      <section className="sectionContactLandinPage">
        <img
          alt="Info Calendar Landing Page Pic"
          src={infoCalendarLandingPageImage}
          className="contactLandingPageImage"
        />
        <div className="divContactLandingPageText">
          <p className="contactLandingPageText">CONTACT</p>
        </div>
      </section>
    </>
  );
};

export default ContactLandingPage;
