import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ContactPRLink.css";

const ContactPRLink = () => {
  return (
    <>
      <div className="divContactPRButton">
        <Link to="/PrayerRequest">
          <button className="buttonPrayerRequestLink">
            Share Your Request with Our Prayer Team
          </button>
        </Link>
      </div>
    </>
  );
};

export default ContactPRLink;
