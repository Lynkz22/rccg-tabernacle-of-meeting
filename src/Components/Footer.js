import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import WWARCCGlogoImage from "../Components/Assets/ChurchLogo/RCCGLogo.png";
import WWATOMlogoImage from "../Components/Assets/ChurchLogo/RTOM1.png";

const Footer = () => {
  return (
    <>
      <section className="sectionFooter">
        <div className="divFooter">
          <div className="divHeading">
            <p>RCCG TABERNACLE OF MEETING</p>
          </div>
          <div className="divFooterLinks">
            <Link to="/" className="footerLink">
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">Home</p>
            </Link>
            <Link to="/WhoWeAre" className="footerLink">
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">WHO WE ARE</p>
            </Link>
            <Link to="/Events" className="footerLink">
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">EVENTS</p>
            </Link>
            <Link to="/Calendar" className="footerLink">
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">CALENDAR</p>
            </Link>
            <Link to="/Contact" className="footerLink">
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">CONTACT</p>
            </Link>
          </div>
        </div>

        {/* <div className="footerSocialLinks">
          <Link
            to="https://www.instagram.com/unik_tosa_limited/"
            className="footerLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram-square"></i>
          </Link>
          <Link
            to="https://www.instagram.com/unik_tosa_limited/"
            className="footerLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram-square"></i>
          </Link>
        </div>

        <div className="divFooterLogos">
          <div class="circleFooter leftFooter">
            <img
              alt="WWA RCCG Logo"
              src={WWARCCGlogoImage}
              className="footerLogosImage"
            />
          </div>
          <div class="circleFooter rightFooter">
            <img
              alt="WWA RCCG Logo"
              src={WWATOMlogoImage}
              className="footerLogosImage"
            />
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Footer;
