import React from "react";
import "../Styles/HomePicture.css";
import HomePictureImage1 from "../Components/Assets/ChurchPictures/Picture5.webp";

const WWAPicture = () => {
  return (
    <>
      <section className="sectionHomePicture">
        <img
          src={HomePictureImage1}
          alt="HomePictureImage"
          className="homePictureImage"
        />
      </section>
    </>
  );
};

export default WWAPicture;
