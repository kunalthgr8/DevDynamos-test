import React, { useState } from 'react';
import nav_logo from "../img/openlakeLogo.png";
import dropDown from "../img/dropdown.svg";
import {Link} from 'react-scroll';
import "./NavBar.css";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="Navbar">
      <a href='/'><img src={nav_logo} alt="OpenLake Logo" id="nav-logo" /></a>
      <div className="nav-buttons">
        <Link className="nav-btn"  to="Intro" spy={true} smooth={true} offset={-100} duration={500}>HOME</Link>
        <Link className="nav-btn" to="Project" spy={true} smooth={true} offset={-100} duration={500}>PROJECT</Link>
        <Link className="nav-btn" to="Blog" spy={true} smooth={true} offset={-100} duration={500}>BLOG</Link>
        <Link className="nav-btn" to="Contacts" spy={true} smooth={true} offset={-100} duration={500}>CONTACT</Link>
        <div className="hamburger">
          <a onClick={toggleDropdown}>
            <img
              src={dropDown}
              alt="Menu"
              id="menu"
              className={`white-dropdown ${isDropdownOpen ? 'rotate' : ''}`}
            />
          </a>

          {/* This id dropdown menu  */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="Intro" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleDropdown}>Home</Link>
              <Link className="dropdown-item" to="Project" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleDropdown}>Project</Link>
              <Link className="dropdown-item" to="Blog" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleDropdown}>Blog</Link>
              <Link className="dropdown-item" to="Contacts" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleDropdown}>Contact</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;