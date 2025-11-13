import React from "react";
import "../Styles/WWALandingPage.css";
import WWARCCGlogoImage from "../Components/Assets/ChurchLogo/RCCGLogo.png";

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
            src={WWARCCGlogoImage}
            className="WWALogosImage"
          />
        </div>
      </section>
    </>
  );
};

export default WWALogos;
