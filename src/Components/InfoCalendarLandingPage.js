import React from "react";
import "../Styles/InfoCalendarLandingPage.css";
import infoCalendarLandingPageImage from "../Components/Assets/LandingPage/Calendar.webp";

const InfoCalendarLandingPage = () => {
  return (
    <>
      <section className="sectionInfoCalendarLandinPage">
        <img
          alt="Info Calendar Landing Page Pic"
          src={infoCalendarLandingPageImage}
          className="infoCalendarLandingPageImage"
        />
        <div className="divInfoCalendarLandingPageText">
          <p className="infoCalendarLandingPageText">CALENDAR</p>
        </div>
      </section>
    </>
  );
};

export default InfoCalendarLandingPage;
