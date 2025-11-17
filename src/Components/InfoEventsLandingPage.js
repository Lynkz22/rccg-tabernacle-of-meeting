import React from "react";
import "../Styles/InfoEventsLandingPage.css";
import InfoEventsLandingPageImage from "../Components/Assets/ChurchPictures/Picture1.webp";

const InfoEventsLandingPage = () => {
  return (
    <>
      <section className="sectionInfoEventsLandingPage">
        <img
          alt="Info Events Landing Page Pic"
          src={InfoEventsLandingPageImage}
          className="infoEventsLandingPageImage"
        />

        <div className="divInfoEventsLandinPageText">
          <p className="infoEventsLandingPageText">EVENTS</p>
        </div>
      </section>
    </>
  );
};

export default InfoEventsLandingPage;
