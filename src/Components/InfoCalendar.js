import React from "react";
import "../Styles/InfoCalendar.css";
import HomePictureImage from "../Components/Assets/HomeLandingPage/LandingPage2.jpg";

const InfoCalendar = () => {
  return (
    <>
      <section className="sectionInfoCalendar">
        <div className="divCalendarImage">
          <img
            src={HomePictureImage}
            alt="HomePictureImage"
            className="homePictureImage"
          />
        </div>
        <div className="divCalendarText">
          <h2 className="headingCalendarText">
            Annual Convention (Global Event)
          </h2>
          <p className="calendarText">
            Held annually in August at Redemption Camp, located at Kilometer 46
            on the Lagos-Ibadan Expressway, Ogun State, Nigeria.
          </p>
        </div>
      </section>
      <section className="sectionInfoCalendar">
        <div className="divCalendarImage">
          <img
            src={HomePictureImage}
            alt="HomePictureImage"
            className="homePictureImage"
          />
        </div>
        <div className="divCalendarImage">
          <img
            src={HomePictureImage}
            alt="HomePictureImage"
            className="homePictureImage"
          />
        </div>
      </section>
    </>
  );
};

export default InfoCalendar;
