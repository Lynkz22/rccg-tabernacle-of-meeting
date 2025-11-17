import React from "react";
import "../Styles/WWALandingPage.css";
import WWARCCGlogoImage from "../Components/Assets/ChurchLogo/RCCGLogo.png";
import WWATOMlogoImage from "../Components/Assets/ChurchLogo/RTOM1.png";

const WWALogos = () => {
  return (
    <>
      <section className="sectionWWALogos">
        <div class="circle left">
          <img
            alt="WWA RCCG Logo"
            src={WWARCCGlogoImage}
            className="WWALogosImage"
          />
        </div>
        <div class="circle right">
          <img
            alt="WWA RCCG Logo"
            src={WWATOMlogoImage}
            className="WWALogosImage"
          />
        </div>
      </section>
    </>
  );
};

export default WWALogos;
