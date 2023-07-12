import React, { useState } from 'react';
import nav_logo from "../img/openlakeLogo.png";
import dropDown from "../img/dropdown.svg";
import "./NavBar.css";
// import "./index.css";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="Navbar">
      <img src={nav_logo} alt="OpenLake Logo" id="nav-logo" />
      <div className="nav-buttons">
        <a className="nav-btn">HOME</a>
        <a className="nav-btn">PROJECT</a>
        <a className="nav-btn">BLOG</a>
        <a className="nav-btn">CONTACT</a>
        <div className="hamburger">
          <a onClick={toggleDropdown}>
            <img
              src={dropDown}
              alt="Menu"
              id="menu"
              className={`white-dropdown ${isDropdownOpen ? 'rotate' : ''}`}
            />
          </a>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a className="dropdown-item">Home</a>
              <a className="dropdown-item">Project</a>
              <a className="dropdown-item">Blog</a>
              <a className="dropdown-item">Contact</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
