import "../Styles/A-Navbar.css";
import { NavbarLinks } from "../Components/NavbarLinks";
import Logo from "../Components/Assets/ChurchLogo/RTOM1.png";
import RCCGLogo from "../Components/Assets/ChurchLogo/RCCGLogo.png";

// import React, { Component, useState, useEffect } from "react";
// import { useLocation, Link } from "react-router-dom";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));

    if (!this.state.clicked) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  changeNavbarBackground = () => {
    if (window.scrollY >= 50) {
      document.querySelector(".navbarItems").classList.add("navbarScrolled");
    } else {
      document.querySelector(".navbarItems").classList.remove("navbarScrolled");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarBackground);
    document.body.classList.remove("no-scroll"); // Reset scroll restriction on load
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarBackground);
  }

  render() {
    return (
      <nav className="navbarItems">
        <div className="divNameLogo">
          <div className="newDivLogo">
            <img
              className="navbarLogoImage"
              alt="Walk Projects Logo"
              src={RCCGLogo}
            />

            <img
              className="navbarLogoImage"
              alt="Walk Projects Logo"
              src={Logo}
            />
          </div>
          <p className="navBarName">
            TABERNACLE <br />
            OF MEETING
          </p>
        </div>

        <div className="divNavigationBarLinks">
          <Link to="/" className="navigationBarLinks">
            Home
          </Link>

          <div className="dropdown">
            <p className="navigationBarLinks navigationBarLinks dropbtn">
              Information
              <span class="material-symbols-outlined dropdownarrow">add</span>
            </p>

            <div className="dropdown-content">
              <Link to="/WhoWeAre">Who We Are</Link>
              <Link to="/Events">Events</Link>
              <Link to="/Calendar">Calendar</Link>
            </div>
          </div>
          <div className="dropdown">
            <p
              // to="/Contact"
              className="navigationBarLinks navigationBarLinks dropbtn"
            >
              Contact
              <span class="material-symbols-outlined dropdownarrow">add</span>
            </p>
            <div className="dropdown-content">
              <Link to="/PrayerRequest">Prayer Request</Link>
              <Link to="/GetInTouch">Get In Touch</Link>
            </div>
          </div>
        </div>

        <div className="menuIcons" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fas fa-times" : "fas fa-bars-staggered"
            }
          ></i>
        </div>

        <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
          {NavbarLinks.map((item, index) => (
            <li className="navLinksList" key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
          <p>TITI</p>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
