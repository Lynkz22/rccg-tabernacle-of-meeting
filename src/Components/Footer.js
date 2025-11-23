import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import WWARCCGlogoImage from "../Components/Assets/ChurchLogo/RCCGLogo.png";
import WWATOMlogoImage from "../Components/Assets/ChurchLogo/RTOM1.png";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaSnapchat,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <section className="sectionFooter">
        <div className="divFooter">
          <div className="divHeading">
            <p>PAGE LINKS</p>
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

        <div className="divFooter">
          <div className="divHeading">
            <p>CONNECT WITH US</p>
          </div>
          <div className="divFooterLinks">
            <Link
              to="https://www.instagram.com/rccgtomu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footerLinkText">Instagram</p>
              <span id="footerSocialMediaIcon">
                <FaInstagram />
              </span>
            </Link>
            <Link
              to="https://www.facebook.com/share/1G2LtFfNYB/"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="footerSocialMediaIcon">
                <FaFacebook />
              </span>
              <p className="footerLinkText">Facebook</p>
            </Link>
            <Link
              to="https://x.com/rccgtomuk?s=20"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="footerSocialMediaIcon">
                <FaTwitter />
              </span>
              <p className="footerLinkText">Twitter</p>
            </Link>
            <Link
              to="https://www.tiktok.com/@rccgtomofficial?is_from_webapp=1&sender_device=pc"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="footerSocialMediaIcon">
                <FaTiktok />
              </span>
              <p className="footerLinkText">Tiktok</p>
            </Link>
            <Link
              to="/Contact"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="footerSocialMediaIcon">
                <FaSnapchat />
              </span>
              <p className="footerLinkText">Snapchat</p>
            </Link>
            <Link
              to="/Contact"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="footerSocialMediaIcon">
                <FaThreads />
              </span>
              <p className="footerLinkText">Threads</p>
            </Link>
            <Link
              to="rccgtomuk@gmail.com"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="footerSocialMediaIcon">
                <SiGmail />
              </span>
              <p className="footerLinkText">Gmail</p>
            </Link>
          </div>
        </div>

        <div className="divFooter">
          <div className="divHeading3">
            <p>RCCG TABERNACLE OF MEETING</p>
          </div>
          <div className="divFooterLogos">
            fl
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
