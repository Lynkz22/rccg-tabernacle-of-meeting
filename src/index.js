import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./App.css";
import "./Styles/A-Navbar.css";
import "./Styles/Contact.css";
import "./Styles/ContactGITLandingPage.css";
import "./Styles/ContactPrayerRequestLandingPage.css";
import "./Styles/Footer.css";
import "./Styles/HomeBibleVerses.css";
import "./Styles/HomeGetInTouch.css";
import "./Styles/HomeLandingPage.css";
import "./Styles/HomePicture.css";
import "./Styles/HomeSomethingForYou.css";
import "./Styles/HomeTrianglePictures.css";
import "./Styles/HomeUnderTheMinistry.css";
import "./Styles/HomeWords.css";
import "./Styles/HomeWorshipWithUs.css";
import "./Styles/InfoCalendar.css";
import "./Styles/InfoCalendarLandingPage.css";
import "./Styles/InfoEvents.css";
import "./Styles/InfoEventsLandingPage.css";
import "./Styles/main.css";
import "./Styles/Space.css";
import "./Styles/WWAAbout.css";
import "./Styles/WWALandingPage.css";
import "./Styles/WWALogos.css";
import "./Styles/WWAMissionAndVision.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
