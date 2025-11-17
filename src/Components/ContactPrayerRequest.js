import React from "react";
import "../Styles/ContactPrayerRequestLandingPage.css";
import ContactPrayerRequestLandingPageImage from "../Components/Assets/ChurchPictures/Picture3.webp";

const ContactPrayerRequest = () => {
  return (
    <>
      <section className="sectionContactPrayerRequest">
        <img
          alt="Contact Prayer Request Landing Page Pic"
          src={ContactPrayerRequestLandingPageImage}
          className="ContactPrayerRequestLandingPageImage"
        />
        <div className="divPrayerRequestLandingPageText">
          <p className="PrayerRequestLandingPageText">PRAYER REQUEST</p>
        </div>
      </section>
    </>
  );
};

export default ContactPrayerRequest;
