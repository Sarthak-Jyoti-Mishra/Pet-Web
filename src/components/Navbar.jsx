import React, { useState } from 'react';
import './Navbar.css';
import companyLogo from '../assets/companylogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='nav'>
      <div className="logo">
        <img src={companyLogo} alt="Company Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
      </div>
      <div className={`list ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="searchContainer">
          <input type='text' placeholder='Search...' />
          <div className='searchIcon'>
            <FontAwesomeIcon icon={faSearch} className='iconOrigin' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
