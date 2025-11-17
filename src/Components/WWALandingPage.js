import React from "react";
import "../Styles/WWALogos.css";
import WWALandingPageImage from "../Components/Assets/ChurchPictures/Untitled design (4).png";

const WWALandingPage = () => {
  return (
    <>
      <section className="sectionWWALandingPage">
        <img
          alt="WWA Landing Page Pic"
          src={WWALandingPageImage}
          className="WWALandingPageImage"
        />

        <div className="divWWALandinPageText">
          <p className="WWALandingPageText">WHO WE ARE</p>
        </div>
      </section>
    </>
  );
};

export default WWALandingPage;
