import React from "react";
import "../Styles/ContactGITLandingPage.css";
import ContactGITtLandingPageImage from "../Components/Assets/ChurchPictures/Picture5.webp";

const ContactGITLandingPage = () => {
  return (
    <>
      <section className="sectionGITLandingPage">
        <img
          alt="Contact GIT Landing Page Pic"
          src={ContactGITtLandingPageImage}
          className="ContactGITLandingPageImage"
        />
        <div className="divGITLandingPageText">
          <p className="GITLandingPageText">GET IN TOUCH</p>
        </div>
      </section>
    </>
  );
};

export default ContactGITLandingPage;
