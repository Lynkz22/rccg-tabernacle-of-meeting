import React from "react";
import "../Styles/HomePicture.css";
import HomePictureImage from "../Components/Assets/HomeLandingPage/LandingPage2.jpg";

const HomePicture = () => {
  return (
    <>
      <section className="sectionHomePicture">
        <img
          src={HomePictureImage}
          alt="HomePictureImage"
          className="homePictureImage"
        />
      </section>
    </>
  );
};

export default HomePicture;
