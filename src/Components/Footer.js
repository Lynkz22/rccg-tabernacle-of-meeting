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
  FaWhatsapp,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <section className="sectionFooter">
        <div className="divFooter">
          <div className="divHeading">
            <p>Page Links</p>
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
              <p className="footerLinkText">Who We Are</p>
            </Link>
            <Link to="/Events" className="footerLink">
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">Events</p>
            </Link>
            <Link to="/Calendar" className="footerLink">
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">Calendar</p>
            </Link>
            <Link to="/PrayerRequest" className="footerLink">
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">Prayer Requests</p>
            </Link>
            <Link to="/GetInTouch" className="footerLink">
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">Get In Touch</p>
            </Link>
          </div>
        </div>

        <div className="divFooter">
          <div className="divHeading">
            <p>RCCG MISSIONS</p>
          </div>
          <div className="divFooterLinks">
            <Link
              to="https://www.rccg.org/"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">RCCG, HQ, Lagos, Nigeria </p>
            </Link>
            <Link
              to="https://rccgcentraloffice.church/"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">RCCG United Kingdom</p>
            </Link>
            <Link
              to="https://www.rccgeuropecontinent.org/"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">RCCG Europe Continent</p>
            </Link>
            <Link
              to="https://www.rccg.org/african-missions/"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="material-symbols-outlined" id="footerArrowIcon">
                chevron_right
              </span>
              <p className="footerLinkText">RCCG African Nations</p>
            </Link>
          </div>
        </div>

        <div className="divFooter">
          <div className="divHeading">
            <p>FIND US</p>
          </div>
          <div className="divFooterLinks">
            <Link to="" className="footerLink">
              <p className="footerLinkText1">
                <span>Address:</span> <br />
                Highlight Community Centre Barry, Stirling Rd, Barry CF62 8NS,
                United Kingdom.
              </p>
            </Link>
            <div className="divTextForAddress">
              <p className="thatHeading">Join Us Online:</p>
              <Link className="footerLink">
                <p className="footerLinkText">
                  https://us06web.zoom.us/j/8500200592
                </p>
              </Link>
            </div>
            <div className="divTextForAddress">
              {/* <p className="footerLink"> */}
              <p className="footerLinkText1">
                <span>Phone:</span>
                +44 78 4370 4684
              </p>
              {/* </p> */}
            </div>
            <div className="divTextForAddress">
              <p className="footerLinkText1">
                <span>Email:</span>
                rccgtomuk@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="divFooter">
          <div className="divHeading">
            <p>CONNECT WITH US</p>
          </div>

          <div className="divFooterSocialMediaLinks">
            <div>
              <Link
                to="https://youtube.com/@rccgtomuk?si=t5wj02VB3_sPJRYd"
                className="footerLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="footerSocialMediaIcon">
                  {/* <FaYoutube /> */}
                  <ImYoutube2 className="YouTubeColor hoverColor" />
                </span>
              </Link>
            </div>
            <div>
              <Link
                to="https://www.instagram.com/rccgtomu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="footerLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="footerSocialMediaIcon">
                  <FaInstagram className="InstagramColor hoverColor" />
                </span>
              </Link>
            </div>
            <div>
              <Link
                to="http://wa.link/2w3s06"
                className="footerLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="footerSocialMediaIcon">
                  <FaWhatsapp className="WhatsappColor hoverColor" />
                </span>
              </Link>
            </div>
            <div>
              <Link
                to="https://www.facebook.com/share/1G2LtFfNYB/"
                className="footerLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="footerSocialMediaIcon">
                  <FaFacebook className="FacebookColor hoverColor" />
                </span>
              </Link>
            </div>
            <Link
              to="https://x.com/rccgtomuk?s=20"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="footerSocialMediaIcon">
                <FaTwitter className="TwitterColor hoverColor" />
              </span>
            </Link>
            <Link
              to="https://www.tiktok.com/@rccgtomofficial?is_from_webapp=1&sender_device=pc"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="footerSocialMediaIcon">
                <FaTiktok className="TiktokColor hoverColor" />
              </span>
            </Link>
            <Link
              to="https://snapchat.com/t/PVGxGdHe"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="footerSocialMediaIcon">
                <FaSnapchat className="SnapchatColor hoverColor" />
              </span>
            </Link>
            <Link
              to="https://www.threads.com/@rccgtomu"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="footerSocialMediaIcon">
                <FaThreads className="ThreadsColor hoverColor" />
              </span>
            </Link>
            {/* <Link
              to="/GetInTouch"
              className="footerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="footerSocialMediaIcon">
                <SiGmail />
              </span>
            </Link> */}
          </div>
        </div>

        <div className="divFooter">
          <div className="divHeading3">
            <p>RCCG TABERNACLE OF MEETING</p>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
