import React from "react";
import "../Styles/WWAPicture.css";
import ContactGITImage from "../Components/Assets/ChurchPictures/Picture4.webp";

const ContactGITPicture = () => {
  return (
    <section className="sectionWWAPicture">
      <img
        src={ContactGITImage}
        alt="ContactGITImage"
        className="WWAPictureImage"
      />
    </section>
  );
};

export default ContactGITPicture;
