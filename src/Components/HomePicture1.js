import React from "react";
import "../Styles/WWAPicture.css";
import HomePictureImage1 from "../Components/Assets/HomeWorship/HandRaised.webp";

const HomePicture1 = () => {
  return (
    <section className="sectionWWAPicture">
      <img
        src={HomePictureImage1}
        alt="HomePictureImage"
        className="WWAPictureImage"
      />
    </section>
  );
};

export default HomePicture1;
